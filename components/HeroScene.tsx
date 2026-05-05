"use client";

import { useEffect, useRef } from "react";

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let mounted = true;
    let disposeThree: (() => void) | undefined;

    import("three").then((THREE) => {
      if (!mounted) return;

      const w = container.clientWidth;
      const h = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      Object.assign(renderer.domElement.style, {
        position: "absolute", inset: "0", width: "100%", height: "100%",
      });
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 50);
      camera.position.z = 5;

      // Particles
      const N = 180;
      const pos = new Float32Array(N * 3);
      const vel: { x: number; y: number }[] = [];

      for (let i = 0; i < N; i++) {
        pos[i * 3]     = (Math.random() - 0.5) * 11;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
        vel.push({
          x: (Math.random() - 0.5) * 0.0035,
          y: (Math.random() - 0.5) * 0.0035,
        });
      }

      const geo = new THREE.BufferGeometry();
      const attr = new THREE.BufferAttribute(pos, 3);
      geo.setAttribute("position", attr);

      const mat = new THREE.PointsMaterial({
        size: 0.048,
        color: new THREE.Color(0xbf8a93),
        transparent: true,
        opacity: 0.5,
        sizeAttenuation: true,
      });

      scene.add(new THREE.Points(geo, mat));

      const mouse = { x: 0, y: 0 };

      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width  - 0.5) * 11;
        mouse.y = -((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      };
      window.addEventListener("mousemove", onMouseMove);

      function tick() {
        if (!mounted) return;
        rafId = requestAnimationFrame(tick);

        for (let i = 0; i < N; i++) {
          let x = attr.getX(i) + vel[i].x;
          let y = attr.getY(i) + vel[i].y;

          // Mouse repulsion
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 4.5 && d2 > 0.001) {
            const d = Math.sqrt(d2);
            const f = ((2.1 - d) / 2.1) * 0.03;
            x += (dx / d) * f;
            y += (dy / d) * f;
          }

          // Wrap edges
          if (x >  5.8) x = -5.8;
          if (x < -5.8) x =  5.8;
          if (y >  4.2) y = -4.2;
          if (y < -4.2) y =  4.2;

          attr.setXY(i, x, y);
        }
        attr.needsUpdate = true;

        camera.position.x += (mouse.x * 0.03 - camera.position.x) * 0.025;
        camera.position.y += (mouse.y * 0.02 - camera.position.y) * 0.025;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      }
      tick();

      const onResize = () => {
        const nw = container.clientWidth;
        const nh = container.clientHeight;
        renderer.setSize(nw, nh);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);

      disposeThree = () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
        geo.dispose();
        mat.dispose();
      };
    });

    return () => {
      mounted = false;
      disposeThree?.();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}
