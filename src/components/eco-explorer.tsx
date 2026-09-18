'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './eco-explorer.module.css';

/* ------------------------------------------------------------------ */
/*  PARTS — ported verbatim from the signed-off prototype PARTS JSON.  */
/*  Only asset paths changed: assets/x.png -> /eco/x.png.              */
/* ------------------------------------------------------------------ */

type Spec = [string, string];
type PartGroup = 'drive' | 'hitch' | 'sensor' | 'tools' | 'augers';

type Part = {
  name: string;
  group: PartGroup;
  groupLabel: string;
  file: string;
  sx: number;
  sy: number;
  sh: number;
  sw: number;
  desc: string;
  specs: Spec[];
  family: string;
};

const PARTS: Record<string, Part> = {
  drive: {
    name: 'Auger Drive — YA Series',
    group: 'drive',
    groupLabel: 'Power Head',
    file: '/eco/drive.png',
    sx: 51.5,
    sy: 47.0,
    sh: 43.0,
    sw: 14.433,
    desc: 'The YA series auger drive is a hydraulically driven planetary power head that turns earth augers and helical piles. High-grade materials, a carbon-nitrided gearbox and a lifetime-warranted output shaft cover the full range from compact mini-excavators to heavy rigs.',
    specs: [
      ['Series', 'YA2000 – YA100000'],
      ['Output torque', 'up to 100,000 Nm'],
      ['Carriers', '0.5 t excavators up to heavy rigs'],
      ['Output speed', '30–95 RPM class'],
      ['Warranty', 'Lifetime on output shaft'],
    ],
    family: '/products/drives',
  },
  'hitch-double-cradle': {
    name: 'Double Pin Cradle Hitch',
    group: 'hitch',
    groupLabel: 'Hitch',
    file: '/eco/hitch-double-cradle.png',
    sx: 13.0,
    sy: 14.0,
    sh: 12.0,
    sw: 8.523,
    desc: 'Suitable for all Yichen drives from YA2000 to YA100000. Eliminates auger swing during dirt shake-off and lets you transport the drive and auger safely on site.',
    specs: [
      ['Type', 'Double pin cradle'],
      ['Fits', 'Standard & quick-hitch excavators, backhoes'],
      ['Drive range', 'YA2000–YA100000'],
      ['Pin option', 'Loose or fixed pin'],
    ],
    family: '/products/hitch',
  },
  'hitch-single-pin': {
    name: 'Single Pin Hitch',
    group: 'hitch',
    groupLabel: 'Hitch',
    file: '/eco/hitch-single-pin.png',
    sx: 36.413,
    sy: 14.0,
    sh: 11.5,
    sw: 10.359,
    desc: 'A lightweight, non-bulky single-pin hitch that is easy to transport and fit — the economical mounting option.',
    specs: [
      ['Type', 'Single pin'],
      ['Benefit', 'Lightweight, economical'],
      ['Handling', 'Easy transport & fit'],
    ],
    family: '/products/hitch',
  },
  'hitch-double-pin': {
    name: 'Double Pin Hitch',
    group: 'hitch',
    groupLabel: 'Hitch',
    file: '/eco/hitch-double-pin.png',
    sx: 60.685,
    sy: 14.0,
    sh: 11.5,
    sw: 10.304,
    desc: 'Supplied in loose or fixed pin versions to suit standard and quick-hitch setups on most excavators and backhoes. Suitable for every Yichen drive range.',
    specs: [
      ['Type', 'Double pin'],
      ['Fits', 'Most excavators & backhoes'],
      ['Pin option', 'Loose or fixed pin'],
      ['Drive range', 'All Yichen drives'],
    ],
    family: '/products/hitch',
  },
  'hitch-skid-frame': {
    name: 'Skid Steer Loader Frame',
    group: 'hitch',
    groupLabel: 'Hitch',
    file: '/eco/hitch-skid-frame.png',
    sx: 87.0,
    sy: 14.0,
    sh: 7.8,
    sw: 15.158,
    desc: 'Adds your auger drive to a skid-steer mounted frame with slide operation.',
    specs: [
      ['Mount', 'Skid-steer loader frame'],
      ['Operation', 'Slide mount'],
      ['Drive range', 'YA2000–YA5000'],
    ],
    family: '/products/hitch',
  },
  'sensor-angle': {
    name: 'Angle Indicator',
    group: 'sensor',
    groupLabel: 'Sensors & Monitoring',
    file: '/eco/sensor-angle.png',
    sx: 13.0,
    sy: 30.5,
    sh: 9.2,
    sw: 10.38,
    desc: 'Detects the drilling angle of the auger or helical pile (anchor) in real time and transmits it wirelessly to the in-cab monitor for precise angle control.',
    specs: [
      ['Model', 'AAS-360'],
      ['Accuracy', '±0.5°'],
      ['Range', 'X ±180° / Y ±90° / Z ±180°'],
      ['Protection', 'IP66'],
      ['Transmission', 'Wireless, lithium battery'],
    ],
    family: '/products/helical-piles#sensors',
  },
  'sensor-monitor': {
    name: 'In-cab Torque & Alignment Monitor',
    group: 'sensor',
    groupLabel: 'Sensors & Monitoring',
    file: '/eco/sensor-monitor.png',
    sx: 13.0,
    sy: 47.0,
    sh: 8.5,
    sw: 11.358,
    desc: 'Installed in the cab to receive and record sensor data, converting it into intuitive real-time graphics for accurate torque and alignment control.',
    specs: [
      ['Model', 'EM-10W'],
      ['Display', '10.1"'],
      ['System', 'Win'],
      ['Protection', 'IP67'],
      ['Transmission', 'Wireless, lithium battery'],
    ],
    family: '/products/helical-piles#sensors',
  },
  'sensor-torque': {
    name: 'Torque Indicator',
    group: 'sensor',
    groupLabel: 'Sensors & Monitoring',
    file: '/eco/sensor-torque.png',
    sx: 13.0,
    sy: 63.5,
    sh: 9.2,
    sw: 10.189,
    desc: 'Measures torque in real time and sends it wirelessly to the in-cab monitor — essential when helical piles or anchors are installed using the empirical torque factor method.',
    specs: [
      ['Measurement', 'Real-time torque'],
      ['Accuracy', '0.05% F.S.'],
      ['Safe overload', '150% F.S.'],
      ['Protection', 'IP66'],
      ['Voltage', '5–15V, wireless'],
    ],
    family: '/products/helical-piles#sensors',
  },
  'tool-mixer-bowl': {
    name: 'Cement Mixer Bowl',
    group: 'tools',
    groupLabel: 'Work Tool',
    file: '/eco/tool-mixer-bowl.png',
    sx: 87.0,
    sy: 30.5,
    sh: 9.8,
    sw: 9.678,
    desc: 'A drilling/mixing solution for fencing work on uneven ground. With the mixer cradle hitch the auger is quickly removed and the bowl locked in with a standard auger pin.',
    specs: [
      ['Model', 'ACM series'],
      ['Capacity', '140 / 180 / 220 L options'],
      ['Hub', '65 round, 75 square'],
      ['Drive range', 'YA2000–YA10000'],
    ],
    family: '/products/tools',
  },
  'tool-core-barrel': {
    name: 'Core Barrel',
    group: 'tools',
    groupLabel: 'Work Tool',
    file: '/eco/tool-core-barrel.png',
    sx: 87.0,
    sy: 47.0,
    sh: 11.0,
    sw: 6.647,
    desc: 'A thin cutting edge maximizes penetration by reducing the contact surface that must be cut and removed. Used when conventional augers are less effective, or with tapered rock augers for very hard rock.',
    specs: [
      ['Model', 'ACB series'],
      ['Diameter', '450–1200 mm'],
      ['Barrel length', '1250 mm'],
      ['Hub', '75 / 110 mm square, options'],
      ['Wear parts', 'Wear ribs, custom teeth'],
    ],
    family: '/products/tools',
  },
  'tool-log-splitter': {
    name: 'Log Splitter',
    group: 'tools',
    groupLabel: 'Work Tool',
    file: '/eco/tool-log-splitter.png',
    sx: 87.0,
    sy: 63.5,
    sh: 12.8,
    sw: 6.31,
    desc: 'Turns the drive into a log splitter to quickly reduce fallen timber into manageable pieces. The self-guiding threaded cone draws itself into the log, with a replaceable hardened tip.',
    specs: [
      ['Model', 'ALS-180'],
      ['Diameter', '180 mm'],
      ['Length', '300 mm'],
      ['Hub', '65 round'],
      ['Drive range', 'YA2000–YA5000'],
    ],
    family: '/products/tools',
  },
  'tool-hole-cleaner': {
    name: 'Hole Cleaner',
    group: 'tools',
    groupLabel: 'Work Tool',
    file: '/eco/tool-hole-cleaner.png',
    sx: 87.0,
    sy: 83.904,
    sh: 10.5,
    sw: 7.419,
    desc: 'A clean-out tool for finished bores — clears loose spoil and debris from the hole before concrete, posts or piles are installed.',
    specs: [
      ['Use', 'Post-hole clean-out'],
      ['Mounts on', 'Drive output shaft'],
      ['Typical work', 'Fencing, posts, footings'],
    ],
    family: '/products/tools',
  },
  'tool-stump-planer': {
    name: 'Stump Planer',
    group: 'tools',
    groupLabel: 'Work Tool',
    file: '/eco/tool-stump-planer.png',
    sx: 70.007,
    sy: 82.035,
    sh: 14.8,
    sw: 4.048,
    desc: 'Planes stumps to ground level. The Z-shaped blade reduces cutting resistance so the tip bites smoothly into the stump; a safety-pin connection keeps it secured.',
    specs: [
      ['Model', 'ASP-250 / ASP-350'],
      ['Diameter', '250 / 350 mm'],
      ['Length', '635 / 675 mm'],
      ['Hub', '65 round / 75 square'],
      ['Drive range', 'YA3000–YA10000'],
    ],
    family: '/products/tools',
  },
  'auger-w2': {
    name: 'Earth Auger W2',
    group: 'augers',
    groupLabel: 'Earth Auger',
    file: '/eco/auger-w2.png',
    sx: 13.0,
    sy: 81.579,
    sh: 15.8,
    sw: 4.088,
    desc: 'The W2 earth auger is the all-purpose tool for general drilling in earth, clay, shale and soft rock — efficient and cost-effective, with multi-faced tungsten teeth for longer wear life.',
    specs: [
      ['Type', 'Earth auger (earth / clay / shale)'],
      ['Teeth', 'Multi-faced tungsten'],
      ['Flighting', 'Shallow-pitch, constant spiral'],
      ['Hub', '65 round / 2" hex / 57 square'],
    ],
    family: '/products/earth-augers',
  },
  'auger-w3': {
    name: 'Combination Auger W3',
    group: 'augers',
    groupLabel: 'Earth Auger',
    file: '/eco/auger-w3.png',
    sx: 28.338,
    sy: 82.042,
    sh: 15.0,
    sw: 3.989,
    desc: 'The W3 combination auger uses taper teeth for reliable all-round performance across mixed ground conditions — the versatile choice when soil changes within the same job.',
    specs: [
      ['Type', 'Combination auger (all ground)'],
      ['Teeth', 'Taper teeth'],
      ['Tip', 'Tungsten carbide'],
      ['Hub', 'All major standard hubs'],
    ],
    family: '/products/earth-augers',
  },
  'auger-w4': {
    name: 'Rock Auger W4',
    group: 'augers',
    groupLabel: 'Earth Auger',
    file: '/eco/auger-w4.png',
    sx: 42.991,
    sy: 82.021,
    sh: 15.0,
    sw: 2.669,
    desc: 'The W4 rock auger is a heavy-duty cutting head with tungsten taper teeth, built for fracturable rock, concrete, permafrost and hard ground.',
    specs: [
      ['Type', 'Rock auger (rock / concrete / shale)'],
      ['Teeth', 'Tungsten taper teeth'],
      ['Build', 'Heavy-duty cutting head'],
      ['Tip', 'Tungsten carbide'],
    ],
    family: '/products/earth-augers',
  },
  'auger-extension': {
    name: 'Auger Extension',
    group: 'augers',
    groupLabel: 'Earth Auger',
    file: '/eco/auger-extension.png',
    sx: 56.053,
    sy: 81.227,
    sh: 16.5,
    sw: 1.322,
    desc: 'Extends drilling reach for deeper bores. A safety-pin design keeps the extension securely locked to the drive and auger.',
    specs: [
      ['Use', 'Deeper-hole reach'],
      ['Connection', 'Safety-pin locked'],
      ['Hub', '65 round / 2" hex / 57 square'],
      ['Pairs with', 'W2 / W3 / W4'],
    ],
    family: '/products/earth-augers',
  },
};

/* Exact rendered boxes from the prototype inline styles (percentages).
   sx/sy/sh/sw in PARTS drive hit-testing; these drive pixel placement. */
type Box = { left: number; top: number; width: number; height: number };
const STAGE_BOX: Record<string, Box> = {
  drive: { left: 51.5, top: 46.963, width: 15.92, height: 44.711 },
  'hitch-double-cradle': { left: 12.661, top: 14.191, width: 12.0, height: 15.604 },
  'hitch-single-pin': { left: 36.259, top: 13.868, width: 11.368, height: 12.641 },
  'hitch-double-pin': { left: 60.685, top: 14.0, width: 10.304, height: 11.5 },
  'hitch-skid-frame': { left: 86.798, top: 13.65, width: 16.078, height: 9.088 },
  'sensor-angle': { left: 13.361, top: 30.331, width: 11.777, height: 10.163 },
  'sensor-monitor': { left: 13.05, top: 47.013, width: 11.96, height: 8.676 },
  'sensor-torque': { left: 12.986, top: 63.335, width: 11.754, height: 10.848 },
  'tool-mixer-bowl': { left: 86.757, top: 30.483, width: 11.416, height: 10.877 },
  'tool-core-barrel': { left: 86.914, top: 47.117, width: 9.814, height: 14.729 },
  'tool-log-splitter': { left: 87.082, top: 63.254, width: 7.916, height: 14.734 },
  'tool-hole-cleaner': { left: 87.031, top: 83.558, width: 8.614, height: 11.82 },
  'tool-stump-planer': { left: 70.016, top: 81.97, width: 5.738, height: 16.638 },
  'auger-w2': { left: 13.0, top: 81.557, width: 6.388, height: 18.653 },
  'auger-w3': { left: 28.401, top: 82.083, width: 5.609, height: 15.914 },
  'auger-w4': { left: 43.139, top: 82.042, width: 3.729, height: 16.737 },
  'auger-extension': { left: 56.03, top: 81.204, width: 2.37, height: 18.369 },
};

/* Stage part order (matches prototype DOM). */
const STAGE_ORDER = [
  'drive',
  'hitch-double-cradle',
  'hitch-single-pin',
  'hitch-double-pin',
  'hitch-skid-frame',
  'sensor-angle',
  'sensor-monitor',
  'sensor-torque',
  'tool-mixer-bowl',
  'tool-core-barrel',
  'tool-log-splitter',
  'tool-hole-cleaner',
  'tool-stump-planer',
  'auger-w2',
  'auger-w3',
  'auger-w4',
  'auger-extension',
];

/* Right-rail groups (matches prototype rail DOM). */
const RAIL_GROUPS: { group: string; items: string[] }[] = [
  {
    group: 'Hitches',
    items: ['hitch-double-cradle', 'hitch-single-pin', 'hitch-double-pin', 'hitch-skid-frame'],
  },
  {
    group: 'Sensors & Monitoring',
    items: ['sensor-angle', 'sensor-monitor', 'sensor-torque'],
  },
  {
    group: 'Tools',
    items: [
      'tool-mixer-bowl',
      'tool-core-barrel',
      'tool-log-splitter',
      'tool-hole-cleaner',
      'tool-stump-planer',
    ],
  },
  {
    group: 'Earth Augers',
    items: ['auger-w2', 'auger-w3', 'auger-w4', 'auger-extension'],
  },
];

const TVX = 50;
const TVY = 37;
const DWELL = 60;
const RESET_DELAY = 110;

export function EcoExplorer() {
  const router = useRouter();

  const rootRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hcTagRef = useRef<HTMLParagraphElement>(null);
  const hcNameRef = useRef<HTMLHeadingElement>(null);
  const hcDescRef = useRef<HTMLParagraphElement>(null);
  const hcSpecsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (
      !stageRef.current || !layerRef.current || !gridRef.current || !hintRef.current ||
      !spotRef.current || !cardRef.current || !hcTagRef.current || !hcNameRef.current ||
      !hcDescRef.current || !hcSpecsRef.current || !rootRef.current
    ) {
      return;
    }

    // Elements are guaranteed mounted by the guard above; assert non-null so the
    // type narrowing also holds inside the nested event-handler closures.
    const stageEl: HTMLDivElement = stageRef.current!;
    const layerEl: HTMLDivElement = layerRef.current!;
    const gridEl: HTMLDivElement = gridRef.current!;
    const hintEl: HTMLParagraphElement = hintRef.current!;
    const spotEl: HTMLDivElement = spotRef.current!;
    const cardEl: HTMLDivElement = cardRef.current!;
    const hcTagEl: HTMLParagraphElement = hcTagRef.current!;
    const hcNameEl: HTMLHeadingElement = hcNameRef.current!;
    const hcDescEl: HTMLParagraphElement = hcDescRef.current!;
    const hcSpecsEl: HTMLUListElement = hcSpecsRef.current!;
    const root: HTMLDivElement = rootRef.current!;

    const coarse = window.matchMedia('(pointer:coarse)').matches;

    // tx,ty stored in unscaled-layer translate-% units
    let cam = { z: 1, tx: 0, ty: 0 };
    let active: string = 'drive';
    let dwellTimer: ReturnType<typeof setTimeout> | null = null;
    let resetTimer: ReturnType<typeof setTimeout> | null = null;
    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    let lastPX = 0;
    let lastPY = 0;
    let animating = false;
    let overCard = false;
    let cardFor: string | null = null;

    const partEls = () =>
      Array.from(root.querySelectorAll<HTMLElement>('[data-part-role="eco-part"]'));
    const railBtns = () =>
      Array.from(root.querySelectorAll<HTMLButtonElement>('[data-rail-part]'));

    function firstSentence(s: string): string {
      const i = s.indexOf('. ');
      return i > 0 ? s.slice(0, i + 1) : s;
    }

    function fillCard(id: string): void {
      const d = PARTS[id];
      hcTagEl.textContent = d.groupLabel;
      hcNameEl.textContent = d.name;
      hcDescEl.textContent = firstSentence(d.desc);
      hcSpecsEl.textContent = '';
      d.specs.slice(0, 3).forEach((sp) => {
        const li = document.createElement('li');
        const label = document.createElement('span');
        label.textContent = sp[0];
        const value = document.createElement('b');
        value.textContent = sp[1];
        li.appendChild(label);
        li.appendChild(value);
        hcSpecsEl.appendChild(li);
      });
    }

    function markRail(id: string): void {
      railBtns().forEach((b) => {
        b.classList.toggle(styles.on ?? 'on', b.dataset.railPart === id);
      });
    }

    function focusPart(id: string, instant?: boolean): void {
      const d = PARTS[id];
      if (!d) return;
      active = id;
      const isDrive = id === 'drive';

      partEls().forEach((el) => {
        el.classList.toggle(styles.isActive ?? 'isActive', el.dataset.part === id);
      });

      let z = 1;
      let tx = 0;
      let ty = 0;
      if (!isDrive) {
        z = Math.min(2.8, 0.27 / (d.sh / 100));
        tx = (TVX - 50) / z - (d.sx - 50);
        ty = (TVY - 50) / z - (d.sy - 50);
      }
      cam = { z, tx: tx * z, ty: ty * z };

      if (!isDrive) {
        spotEl.style.background =
          'radial-gradient(circle at ' +
          TVX +
          '% ' +
          TVY +
          '%,rgba(255,255,255,0) 0%,rgba(255,255,255,0) 16%,rgba(13,26,48,.40) 42%,rgba(13,26,48,.62) 72%)';
      } else {
        spotEl.style.background = '';
      }

      if (instant) layerEl.style.transition = 'none';
      layerEl.style.transform =
        'translate(' + cam.tx + '%,' + cam.ty + '%) scale(' + cam.z + ')';
      if (instant) {
        requestAnimationFrame(() => {
          layerEl.style.transition = '';
        });
      }

      if (!instant) {
        animating = true;
        if (settleTimer) clearTimeout(settleTimer);
        settleTimer = setTimeout(() => {
          animating = false;
          if (overCard) return; // pointer parked on info card: keep current focus
          const hit = hitAt(lastPX, lastPY);
          if (hit && hit !== cardFor) focusPart(hit);
        }, 420);
      }

      stageEl.classList.toggle(styles.focusing ?? 'focusing', !isDrive);
      hintEl.classList.toggle(styles.hide ?? 'hide', !isDrive);
      markRail(id);
      cardFor = id;
      fillCard(id);
      cardEl.classList.add(styles.show ?? 'show');
    }

    function resetView(instant?: boolean): void {
      active = 'drive';
      spotEl.style.background = '';
      partEls().forEach((el) => el.classList.remove(styles.isActive ?? 'isActive'));
      markRail('drive');
      if (instant) layerEl.style.transition = 'none';
      cam = { z: 1, tx: 0, ty: 0 };
      layerEl.style.transform = 'translate(0,0) scale(1)';
      if (instant) {
        requestAnimationFrame(() => {
          layerEl.style.transition = '';
        });
      }
      stageEl.classList.remove(styles.focusing ?? 'focusing');
      hintEl.classList.remove(styles.hide ?? 'hide');
      cardEl.classList.remove(styles.show ?? 'show');
      cardFor = null;
    }

    function scheduleFocus(id: string): void {
      if (resetTimer) clearTimeout(resetTimer);
      if (dwellTimer) clearTimeout(dwellTimer);
      dwellTimer = setTimeout(
        () => focusPart(id),
        active === id ? 0 : DWELL,
      );
    }

    function requestFocus(id: string): void {
      if (resetTimer) clearTimeout(resetTimer);
      if (dwellTimer) clearTimeout(dwellTimer);
      dwellTimer = setTimeout(
        () => {
          if (cardFor !== id) focusPart(id);
        },
        cardFor === id ? 0 : DWELL,
      );
    }

    function scheduleReset(): void {
      if (dwellTimer) clearTimeout(dwellTimer);
      resetTimer = setTimeout(() => resetView(), RESET_DELAY);
    }

    function openPart(id: string): void {
      const d = PARTS[id];
      if (!d) return;
      router.push(d.family);
    }

    // Hit-test in ORIGINAL diagram coords by inverse-mapping the pointer
    // through the current camera. Camera motion never changes what a still
    // pointer points at, so focus can never oscillate between enter/exit.
    function hitAt(clientX: number, clientY: number): string | null {
      const r = stageEl.getBoundingClientRect();
      const px = ((clientX - r.left) / r.width) * 100;
      const py = ((clientY - r.top) / r.height) * 100;
      const ox = 50 + (px - 50 - cam.tx) / cam.z;
      const oy = 50 + (py - 50 - cam.ty) / cam.z;
      let best: string | null = null;
      let bd = 1e9;
      for (const id in PARTS) {
        const d = PARTS[id];
        const hw = (d.sw || d.sh) / 2 + 2.5;
        const hh = d.sh / 2 + 2.5;
        if (ox >= d.sx - hw && ox <= d.sx + hw && oy >= d.sy - hh && oy <= d.sy + hh) {
          const dd = Math.abs(ox - d.sx) + Math.abs(oy - d.sy);
          if (dd < bd) {
            bd = dd;
            best = id;
          }
        }
      }
      return best;
    }

    if (!coarse) {
      stageEl.addEventListener(
        'pointermove',
        (e: PointerEvent) => {
          if ((e.target as HTMLElement).closest('[data-hcard]')) {
            overCard = true;
            return;
          }
          overCard = false;
          lastPX = e.clientX;
          lastPY = e.clientY;
          if (animating) return; // no re-targeting while the camera moves
          const id = hitAt(e.clientX, e.clientY);
          if (id && id !== cardFor) requestFocus(id);
        },
      );

      stageEl.addEventListener(
        'pointerenter',
        (e: PointerEvent) => {
          if ((e.target as HTMLElement).closest('[data-hcard]')) return;
          const id = hitAt(e.clientX, e.clientY);
          if (id && id !== cardFor) requestFocus(id);
        },
      );

      stageEl.addEventListener('click', (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('[data-hcard]')) return;
        const id = hitAt(e.clientX, e.clientY);
        if (id) openPart(id);
        else resetView();
      });

      cardEl.style.cursor = 'pointer';
      cardEl.addEventListener('pointerenter', () => {
        overCard = true;
      });
      cardEl.addEventListener('pointerleave', () => {
        overCard = false;
      });
      cardEl.addEventListener('click', () => openPart(active));

      railBtns().forEach((b) => {
        b.addEventListener('pointerenter', () => requestFocus(b.dataset.railPart as string));
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          openPart(b.dataset.railPart as string);
        });
      });

      // exit only when the pointer truly leaves the whole explorer
      gridEl.addEventListener('pointerleave', () => {
        scheduleReset();
      });
    } else {
      stageEl.addEventListener('click', (e: MouseEvent) => {
        const el = (e.target as HTMLElement).closest<HTMLElement>('[data-part-role="eco-part"]');
        if (!el) return;
        const id = el.dataset.part as string;
        if (active === id && id !== 'drive') {
          openPart(id);
          return;
        }
        focusPart(id);
      });

      railBtns().forEach((b) => {
        b.addEventListener('click', () => focusPart(b.dataset.railPart as string));
      });
    }

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') resetView();
      if (e.key === 'Enter') openPart(active);
    };
    stageEl.addEventListener('keydown', onKey);

    resetView(true);

    return () => {
      if (dwellTimer) clearTimeout(dwellTimer);
      if (resetTimer) clearTimeout(resetTimer);
      if (settleTimer) clearTimeout(settleTimer);
      stageEl.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>One system, every attachment</p>
          <h1 className={styles.title}>The YA Series Auger Drill Ecosystem</h1>
          <p className={styles.lede}>
            One drive unit becomes a full working system. Hover any part — on the diagram or in
            the list — to spotlight it. Click to open its product family.
          </p>
        </header>

        <section className={styles.eco} aria-labelledby="eco-title">
          <h2
            id="eco-title"
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
              clip: 'rect(0 0 0 0)',
            }}
          >
            Auger drill ecosystem explorer
          </h2>

          <div className={styles.ecoGrid} ref={gridRef}>
            <div
              className={styles.stage}
              ref={stageRef}
              tabIndex={0}
              aria-label="Auger drill ecosystem diagram. Hover or tap a part to focus it."
            >
              <div className={styles.stageLayer} ref={layerRef}>
                {STAGE_ORDER.map((id) => {
                  const p = PARTS[id];
                  const b = STAGE_BOX[id];
                  return (
                    <img
                      key={id}
                      data-part={id}
                      data-part-role="eco-part"
                      className={styles.ecoPart}
                      style={{
                        left: `${b.left}%`,
                        top: `${b.top}%`,
                        width: `${b.width}%`,
                        height: `${b.height}%`,
                      }}
                      alt={p.name}
                      src={p.file}
                      draggable={false}
                    />
                  );
                })}
              </div>

              <div className={styles.stageSpot} ref={spotRef} />
              <p className={styles.stageHint} ref={hintRef}>
                Hover a part to spotlight it
              </p>

              <div className={styles.hcard} ref={cardRef} data-hcard aria-live="polite">
                <p className={styles.hcTag} ref={hcTagRef} />
                <h3 className={styles.hcName} ref={hcNameRef} />
                <p className={styles.hcDesc} ref={hcDescRef} />
                <ul className={styles.hcSpecs} ref={hcSpecsRef} />
                <span className={styles.hcCta}>Open family →</span>
              </div>
            </div>

            <div className={styles.control}>
              <nav className={styles.rail} aria-label="Parts list">
                <button
                  type="button"
                  className={styles.railLead}
                  data-rail-part="drive"
                >
                  <img src={PARTS.drive.file} alt="" draggable={false} />
                  <span className={styles.rlName}>Auger Drive — YA Series</span>
                  <span className={styles.rlGo}>Open →</span>
                </button>

                {RAIL_GROUPS.map((g) => (
                  <div className={styles.railSec} key={g.group}>
                    <p className={styles.railGroup}>{g.group}</p>
                    <div className={styles.railItems}>
                      {g.items.map((id) => (
                        <button
                          type="button"
                          className={styles.railItem}
                          data-rail-part={id}
                          key={id}
                        >
                          <img src={PARTS[id].file} alt="" draggable={false} />
                          <span className={styles.rlName}>{PARTS[id].name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </nav>
              <p className={styles.controlNote}>Hover to preview · click to open its family</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
