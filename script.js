// 💡 0. 인트로 스크롤 애니메이션 (마우스 휠 1:1 동기화 버전!)
let introScroll = 0;
let isIntroDone = false; // 💡 막이 다 걷혔는지 확인하는 스위치
const introScreen = document.getElementById('intro-screen');

// CSS에 걸려있던 '스르륵' 애니메이션을 강제로 꺼서 마우스에 찰싹 붙게 만듦
if (introScreen) introScreen.style.transition = 'none';

window.addEventListener('wheel', (e) => {
  if (isIntroDone) return; // 이미 막이 다 올라갔으면 이 엔진은 작동 중지!

  // 휠을 굴린 수치(deltaY)만큼 스크롤 값을 누적함
  introScroll += e.deltaY;
  
  // 화면 전체 높이를 계산해서 그 이상은 안 올라가게 리미트 걸기
  const maxScroll = window.innerHeight; 
  introScroll = Math.max(0, Math.min(introScroll, maxScroll));
  
  // 스크롤한 만큼 화면을 위로 밀어 올림 (내리면 다시 내려옴!)
  introScreen.style.transform = `translateY(-${introScroll}px)`;

  // 막이 화면 끝까지 100% 다 걷혔을 때!
  if (introScroll >= maxScroll) {
    isIntroDone = true; // 스위치 ON
    introScreen.style.pointerEvents = 'none'; // 클릭 방해 안 하게 투명화
  }
});
  // 1. 구역 데이터 (ZONE_DATA)
const ZONE_DATA = {
    'zone-green': [
      { face: 'face-top', x: 279, y: 325, w: 232, h: 95 },
      { face: 'face-back', x: 279, y: 0, w: 232, h: 283 }
    ],
    'zone-mint': [
      { face: 'face-back', x: 201, y: 347, w: 176, h: 73 },
      { face: 'face-bottom', x: 201, y: 0, w: 176, h: 104 }
    ],
    'zone-blue': [
      { face: 'face-left', x: 151, y: 0, w: 269, h: 275 },
      { face: 'face-back', x: 0, y: 0, w: 68, h: 275 }
    ],
    'zone-purple': [
      { face: 'face-top', x: 315, y: 0, w: 279, h: 121 },
      { face: 'face-right', x: 299, y: 0, w: 121, h: 82 }
    ],
    'zone-yellow': [
      { face: 'face-back', x: 518, y: 300, w: 76, h: 65 },
      { face: 'face-right', x: 0, y: 300, w: 260, h: 65 }
    ],
    'zone-orange': [
      { face: 'face-bottom', x: 111, y: 257, w: 312, h: 163 }
    ]
  };
  
  // 2. 기초설비 데이터
  const BUTTON_DATA = [
    { id: 'b01', type: 'basic', label: '01', face: 'face-back', x: 80, y: 93, w: 188, h: 240, targetZone: 'zone-green', title: '알코브 (Alcove)', text: `알코브는 전시장에 기본적으로 설치되는 기초설비로, 벽면을 오목하게 하여 만든 공간이다. 주벽에서 일부를 후퇴시켜 형성된 반독립적인 소공간으로, 전시 공간에서는 특정 작품이나 오브제를 위한 전용 공간으로 활용되거나 관람객이 잠시 머물 수 있는 공간으로 기능한다. (출처: 위키백과 — 알코브식 배가법)\n\n전시 공간에서 알코브는 주 공간과 연결되어 있으면서도 분리된 미시적 경계를 형성한다. 벽면이 후퇴하여 생긴 움푹 들어간 형태 자체가 관람객의 신체를 특정 방향으로 유도하고, 그 안에 들어가는 순간 주변 공간으로부터 분리된 친밀한 영역을 경험하게 된다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D70 × H250cm다.\n\nAn alcove is a base fixture installed as standard in exhibition spaces, a space formed by recessing a wall surface inward. As a semi-independent sub-space created by setting back part of the main wall, it is used in exhibition spaces as a dedicated area for specific works or objects, or functions as a space where visitors can briefly pause.\n\nIn an exhibition space, the alcove forms a micro-boundary that is connected to the main space while remaining distinct from it. The recessed form of the wall itself guides the visitor's body in a specific direction, and upon entering it, the visitor experiences an intimate zone separated from the surrounding space. It operates at the second stage of appreciative distance (45–120cm), and standard dimensions are W200 × D70 × H250cm.` },
    { id: 'b02', type: 'basic', label: '02', face: 'face-back', x: 151, y: 348, w: 39, h: 20, targetZone: 'zone-mint', title: '콘센트 (Electrical Outlet)', text: `콘센트는 전시장에 기본적으로 설치되는 기초설비로, 전기 기기의 플러그를 꽂아 전력을 공급받을 수 있도록 벽면이나 바닥에 매립된 전기 접속 장치다. 단상·삼상 방식으로 나뉘며, 설치 위치에 따라 전시 설비의 배치 가능 범위가 결정된다.\n\n전시 공간에서 콘센트는 전시 설비가 배치될 수 있는 반경의 기준점을 설정한다. 콘센트의 위치가 곧 전기를 필요로 하는 가벽들의 설치 가능 구역을 결정하며, 콘센트에서 멀어질수록 비전기식 경계만 존재할 수 있는 구역이 형성된다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W10 × D1 × H5cm다.\n\nAn electrical outlet is a base fixture installed as standard in exhibition spaces, an electrical connection device embedded in walls or floors into which device plugs are inserted to receive power supply. Divided into single-phase and three-phase types, the range within which exhibition equipment can be positioned is determined by installation location.\n\nIn an exhibition space, the electrical outlet establishes the reference point for the radius within which exhibition equipment can be placed. The position of the outlet determines the installable zone for boundaries requiring electricity, and the further from the outlet, the more the zone becomes one where only non-electric boundaries can exist. It operates at the fourth stage of systemic distance (360cm+), and standard dimensions are W10 × D1 × H5cm.` },
    { id: 'b03', type: 'basic', label: '03', face: 'face-back', x: 105, y: 399, w: 87, h: 13, targetZone: 'zone-mint', title: '전선 (Electric Cable)', text: `전선은 전시장에 기본적으로 설치되는 기초설비로, 전기 에너지를 전달하기 위해 도체를 절연재로 감싼 선형 구조물이다. 구리·알루미늄 등의 도체와 PVC·고무 등의 피복재로 제작되며, 전시 공간에서는 전력 공급 경로를 따라 바닥·벽면·천장에 배선된다.\n\n전시 공간에서 전선은 배선 경로 자체가 공간의 흐름을 규정한다. 바닥을 가로지르는 전선은 관람객이 넘거나 우회하도록 동선을 변형시키며, 노출된 배선의 방향이 시선을 장치에서 장치로 이어주는 비물질적 연결선이 된다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 단면 크기는 Ø1 × L300cm다.\n\nAn electric cable is a base fixture installed as standard in exhibition spaces, a linear structure in which a conductor is wrapped in insulating material to transmit electrical energy. Made from conductors such as copper and aluminum with insulating materials such as PVC and rubber, it is routed along floors, walls, and ceilings following the power supply path in exhibition spaces.\n\nIn an exhibition space, the cable routing itself defines the flow of the space. Cables crossing the floor alter visitor movement by requiring them to step over or detour around them, while the direction of exposed wiring creates a non-material line of connection that guides the eye from device to device. It operates at the fourth stage of systemic distance (360cm+), and standard cross-sectional dimensions are Ø1 × L300cm.` },
    { id: 'b04', type: 'basic', label: '04', face: 'face-back', x: 389, y: 399, w: 196, h: 13, targetZone: 'zone-yellow', title: '문턱 (Threshold)',  text: `문턱은 전시장에 기본적으로 설치되는 기초설비로, 출입구나 공간 전환점의 바닥에 설치되는 낮은 단차 구조물이다. 목재·금속·석재로 제작되며, 문이 닫힐 때 바닥과의 틈을 막고 서로 다른 두 공간을 명확히 구분하는 기능을 수행한다.\n\n전시 공간에서 문턱은 두 공간 사이의 가장 작은 물질적 경계다. 물리적 높이는 극히 낮지만 관람객은 문턱을 넘는 순간 공간이 전환되었음을 발과 신체 전체로 감지한다. 단차가 영역 내부의 전환을 표시한다면 문턱은 공간과 공간 사이의 경계선 자체를 물질화한다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W150 × D10 × H10cm다.\n\nA threshold is a base fixture installed as standard in exhibition spaces, a low-step structure installed at the floor of an entrance or spatial transition point. Made from wood, metal, or stone, it seals the gap between the door and floor when closed and serves to clearly demarcate two distinct spaces.\n\nIn an exhibition space, the threshold is the smallest material boundary between two spaces. Although its physical height is minimal, the moment visitors cross it they register the spatial transition through the foot and the body as a whole. Where the level change marks transitions within a zone, the threshold materializes the boundary line between spaces. It operates at the first stage of intimate distance (0–45cm), and standard dimensions are W150 × D10 × H10cm.` },
    { id: 'b05', type: 'basic', label: '05', face: 'face-left', x: 238, y: 286, w: 52, h: 28, targetZone: 'zone-blue', title: '유도등 (Emergency Exit Sign)',  text: `유도등은 전시장에 기본적으로 설치되는 기초설비로, 화재 등 비상 상황 시 관람객을 안전하게 대피시키기 위해 천장이나 벽면에 설치하는 발광 표시 장치다. 녹색 화살표와 인물 픽토그램으로 구성되며, 정전 시에도 작동하도록 내장 배터리를 탑재한다.\n\n전시 공간에서 유도등은 평상시에는 배경으로 존재하다가 비상 상황에서만 능동적 경계로 전환되는 조건부 장치다. 빛과 기호의 조합이 특정 방향으로의 이동을 강제하는 가장 강력한 심리적 경계를 형성하며, 관람객은 의식적 판단 없이 유도등의 방향을 따르게 된다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W20 × D3 × H10cm다.\n\nAn emergency exit sign is a base fixture installed as standard in exhibition spaces, a luminous display device installed on ceilings or walls to safely evacuate visitors in emergency situations such as fires. Composed of green arrows and human pictograms, it is equipped with a built-in battery to remain operational during power outages.\n\nIn an exhibition space, the emergency exit sign exists as background during normal operation and transitions into an active boundary only in emergency situations — a conditional device. The combination of light and symbol forms the most powerful psychological boundary directing movement, causing visitors to follow its direction without conscious deliberation. It operates at the fourth stage of systemic distance (360cm+), and standard dimensions are W20 × D3 × H10cm.` },
    { id: 'b06', type: 'basic', label: '06', face: 'face-left', x: 216, y: 399, w: 196, h: 13, targetZone: 'zone-yellow', title: '하부 몰딩 (Baseboard Molding)', text: `하부 몰딩은 전시장에 기본적으로 설치되는 기초설비로, 벽체와 바닥이 만나는 하단 코너에 설치하는 띠 형태의 마감재다. 목재·알루미늄·PVC 등으로 제작되며, 벽과 바닥 사이의 이음매를 감추고 벽지나 도장면의 손상을 방지하는 기능을 수행한다.\n\n전시 공간에서 하부 몰딩은 벽면과 바닥면 사이의 경계를 물질화하는 가장 작은 건축적 요소다. 몰딩의 색상과 소재가 바닥과 벽의 성격을 분리하거나 통합하며, 간접 조명이 내장된 경우 빛의 선이 바닥을 따라 공간의 윤곽을 드러내는 비물질적 경계로 전환된다. 거리감은 1·2단계(0–120cm)에서 작동하며, 일반적인 크기는 W300 × D2 × H10cm다.\n\nA baseboard molding is a base fixture installed as standard in exhibition spaces, a strip-form finishing material installed at the lower corner where the wall meets the floor. Made from wood, aluminum, or PVC, it conceals the joint between wall and floor and prevents damage to wallpaper or painted surfaces.\n\nIn an exhibition space, the baseboard molding is the smallest architectural element that materializes the boundary between wall and floor surfaces. The color and material of the molding either separates or integrates the character of floor and wall, and when integrated lighting is embedded, the line of light along the floor converts the element into a non-material boundary that traces the contours of the space. It operates at the first and second stages of proxemic distance (0–120cm), and standard dimensions are W300 × D2 × H10cm.` },
    { id: 'b07', type: 'basic', label: '07', face: 'face-right', x: 9, y: 9, w: 143, h: 49, targetZone: 'zone-green', title: '에어컨 (Air Conditioner)', text: `에어컨은 전시장에 기본적으로 설치되는 기초설비로, 냉각 순환을 사용하여 실내의 열을 외부로 배출하고 온도와 습도를 조절하는 기기다. 압축기·응축기·팽창 밸브·증발기로 구성된 냉동 사이클을 통해 작동하며, 전시 공간에서는 항온항습이 요구되는 작품 보존 환경을 유지하기 위해 설치된다.\n\n전시 공간에서 에어컨은 온도차를 통해 공간을 감각적으로 구획한다. 냉기가 닿는 반경과 닿지 않는 반경 사이에 피부로 감지되는 비물질적 경계가 형성되며, 바람이 불어오는 방향이 관람객의 체류 위치와 이동 방향을 자연스럽게 조정한다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W84 × D20 × H30cm다.\n\nAn air conditioner is a base fixture installed as standard in exhibition spaces, a device that expels indoor heat to the exterior and regulates temperature and humidity using a cooling cycle. It operates through a refrigeration cycle comprising a compressor, condenser, expansion valve, and evaporator, and is installed in exhibition spaces to maintain the temperature- and humidity-controlled environment required for artwork preservation.\n\nIn an exhibition space, the air conditioner divides space sensorially through temperature difference. A non-material boundary perceived through the skin forms between the radius the cool air reaches and that which it does not, and the direction from which the air flows naturally adjusts visitor dwell positions and movement directions. It operates at the first stage of proxemic distance (0–45cm), and standard dimensions are W84 × D20 × H30cm.` },
    { id: 'b08', type: 'basic', label: '08', face: 'face-right', x: 9, y: 380, w: 245, h: 32, targetZone: 'zone-yellow', title: '단차 (Level Change)', text: `단차는 전시장에 기본적으로 설치되는 기초설비로, 바닥면의 높이가 달라지는 지점에 형성되는 수직적 경계 요소다. 콘크리트·목재·석재 등으로 마감되며, 높이 차이에 따라 단순한 턱에서부터 계단 형태까지 다양한 형태로 나타난다.\n\n전시 공간에서 단차는 바닥의 높이 변화만으로 영역의 전환을 신체적으로 인지시킨다. 발이 높이 변화를 감지하는 순간 관람객은 다른 구역에 진입했음을 즉각적으로 인식하며, 높이 차이가 클수록 심리적 구획의 강도가 강해진다. 거리감은 1·3단계(0–45cm, 120–360cm)에서 작동하며, 일반적인 크기는 W300 × D10 × H10cm다.\n\nA level change is a base fixture installed as standard in exhibition spaces, a vertical boundary element formed at the point where floor surfaces change height. Finished in concrete, wood, or stone, it appears in various forms ranging from a simple step to a staircase depending on the degree of height difference.\n\nIn an exhibition space, the level change causes visitors to physically register a spatial transition through floor height variation alone. The moment the foot senses the change in level, the visitor immediately recognizes entry into a different zone — and the greater the height difference, the stronger the sense of spatial division. It operates at the first and third stages of proxemic distance (0–45cm, 120–360cm), and standard dimensions are W300 × D10 × H10cm.` },
    { id: 'b09', type: 'basic', label: '09', face: 'face-right', x: 274, y: 315, w: 130, h: 96, targetZone: 'zone-green', title: '라디에이터 (Radiator)', text: `라디에이터는 전시장에 기본적으로 설치되는 기초설비로, 온수나 증기를 순환시켜 열을 방출하는 난방 장치다. 주철·알루미늄·강철 패널로 제작되며, 벽면 하단에 고정 설치된다. 열이 대류와 복사를 통해 주변 공간으로 전달되며, 열원의 반경에 따라 온도 분포가 달라진다.\n\n전시 공간에서 라디에이터는 온기가 닿는 반경과 닿지 않는 반경 사이에 감각적 경계를 만든다. 라디에이터 근처 구역은 따뜻하고 먼 구역은 상대적으로 차갑게 느껴지며, 관람객은 피부를 통해 구역의 경계를 감지한다. 물리적 구조물이기도 하면서 동시에 비물질적 온도 경계를 생성하는 이중적 경계다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W400 × D5 × H70cm다.\n\nA radiator is a base fixture installed as standard in exhibition spaces, a heating device that releases heat by circulating hot water or steam. Made from cast iron, aluminum, or steel panels, it is fixed to the lower portion of walls. Heat is transferred to the surrounding space through convection and radiation, with temperature distribution varying according to the radius of the heat source.\n\nIn an exhibition space, the radiator creates a sensory boundary between zones the warmth reaches and those it does not. The zone near the radiator feels warm while zones further away feel relatively cool, and visitors sense the boundary through their skin. It is a dual boundary — a physical structure that simultaneously generates a non-material temperature boundary. It operates at the first stage of intimate distance (0–45cm), and standard dimensions are W400 × D5 × H70cm.` },
    { id: 'b10', type: 'basic', label: '10', face: 'face-top', x: 9, y: 14, w: 219, h: 18, targetZone: 'zone-blue', title: '블라인드 (Blind)', text: `블라인드는 전시 목적으로 별도 반입되는 차광 장치로, 채광 조절, 보온, 방음은 물론 밖에서 방 안이 들여다보이지 않게 하는 기능을 수행하는 창문 가리개다. 수평 슬랫형(베네치안)·수직 슬랫형(버티컬)·롤스크린형으로 나뉘며, 슬랫의 각도 조절을 통해 빛의 투과량을 단계적으로 제어할 수 있다.\n\n전시 공간에서 블라인드는 슬랫 각도에 따라 빛의 투과량을 정밀하게 조절하며 구역의 조도를 달리한다. 완전히 닫으면 암막에 가까운 상태가 되고, 비스듬히 열면 빛을 분산시키면서 시야는 차단하는 이중 기능을 수행한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D0.5 × H300cm다.\n\nA blind is a light-blocking device brought in separately for exhibition purposes, a window covering that controls light, provides insulation and sound dampening, and prevents the interior from being seen from outside. It is divided into horizontal slat (Venetian), vertical slat, and roller screen types, with the amount of light transmission controlled in stages through slat angle adjustment.\n\nIn an exhibition space, the blind precisely regulates light transmission through slat angle adjustment, creating different illuminance levels between zones. Fully closed, it approaches a blackout state; angled open, it simultaneously diffuses light while blocking sightlines. It operates at the second stage of appreciative distance (45–120cm), and standard dimensions are W200 × D0.5 × H300cm.` },
    { id: 'b11', type: 'basic', label: '11', face: 'face-top', x: 164, y: 145, w: 36, h: 36, targetZone: 'zone-purple', title: '핀 조명 (Pin Spotlight)', text: `핀조명은 전시장에 기본적으로 설치되는 기초설비로, 좁은 빔 각도로 특정 지점만을 강하게 조사하는 집중형 조명 장치다. 할로겐·LED 광원을 사용하며, 빔 각도는 일반적으로 10–25도로 제한된다. 천장 레일이나 고정 브라켓에 설치되며 각도 조절이 가능한 짐벌 구조로 제작된다.\n\n전시 공간에서 핀조명은 빛이 닿는 영역과 닿지 않는 영역 사이에 명확한 경계를 만든다. 어둠 자체가 벽이 되어 관람객의 시선을 강제적으로 한 지점에 집중시키며, 조사 범위 밖의 공간을 시각적으로 소거한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W10 × D10 × H20cm다.\n\nA pin spotlight is a base fixture installed as standard in exhibition spaces, a concentrated lighting device that intensely illuminates only a specific point using a narrow beam angle. Using halogen or LED light sources, the beam angle is typically limited to 10–25 degrees. It is installed on ceiling rails or fixed brackets and manufactured with a gimbal structure allowing angle adjustment.\n\nIn an exhibition space, the pin spotlight creates a clear boundary between areas the light reaches and those it does not. Darkness itself becomes the wall, forcibly concentrating visitor attention on a single point while visually erasing the space outside the illuminated zone. It operates at the second stage of appreciative distance (45–120cm), and standard dimensions are W10 × D10 × H20cm.` },
    { id: 'b12', type: 'basic', label: '12', face: 'face-top', x: 563, y: 136, w: 19, h: 226, targetZone: 'zone-purple', title: '조명 레일 (Lighting Rail)',  text: `조명 레일은 전시장에 기본적으로 설치되는 기초설비로, 천장에 고정된 도전성 레일을 따라 조명 기구를 자유롭게 이동·배치할 수 있는 조명 시스템이다. 단상·삼상 방식으로 나뉘며, 스포트라이트·플러드라이트 등 다양한 조명 기구를 혼용할 수 있다.\n\n전시 공간에서 조명 레일은 빛의 분포를 통해 공간의 위계와 영역을 설정한다. 밝은 구역과 어두운 구역의 대비가 관람객의 시선과 동선을 유도하며, 물리적 벽 없이 조도 차만으로 경계를 형성한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D5 × H3cm다.\n\nA lighting rail is a base fixture installed as standard in exhibition spaces, a lighting system comprising a conductive rail fixed to the ceiling along which lighting fixtures can be freely moved and positioned. It is divided into single-phase and three-phase systems, allowing various fixtures including spotlights and floodlights to be used in combination.\n\nIn an exhibition space, the lighting rail establishes spatial hierarchy and zones through the distribution of light. The contrast between illuminated and unilluminated zones guides visitor sightlines and movement, forming boundaries through differences in illuminance alone, without any physical wall. It operates at the second stage of appreciative distance (45–120cm), and standard dimensions are W200 × D5 × H3cm.` },
    { id: 'b13', type: 'basic', label: '13', face: 'face-top', x: 547, y: 372, w: 36, h: 36, targetZone: 'zone-purple', title: '보안 카메라 (Security Camera)',  text: `보안 카메라는 전시장에 기본적으로 설치되는 기초설비로, 비디오 카메라를 이용해 특정된 장소의 한정된 모니터로 신호를 전송하는 방법으로, 흔히 감시카메라에 사용되는 장치다. 고정형·PTZ(팬·틸트·줌)형으로 나뉘며, 천장이나 벽면 상단에 설치되어 넓은 시야각을 확보한다.\n\n전시 공간에서 보안 카메라는 촬영된다는 인식만으로 관람객의 행위를 심리적으로 억제한다. 어떤 감각도 차단하지 않고 신체도 아무것도 느끼지 못하지만, 감시받고 있다는 인식이 행동의 경계를 스스로 설정하게 만든다. 실제로 감시가 이루어지고 있는지와 무관하게 감시 가능성 자체가 경계를 형성한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W8 × D20 × H7cm다.\n\nA security camera is a base fixture installed as standard in exhibition spaces, a device that uses video cameras to transmit signals to limited monitors at specific locations, commonly used in surveillance systems. It is divided into fixed and PTZ (pan-tilt-zoom) types, installed on ceilings or upper wall surfaces to secure a wide field of view.\n\nIn an exhibition space, the security camera psychologically suppresses visitor behavior through the mere awareness of being recorded. It blocks no sensory perception and the body feels nothing — yet the awareness of being watched causes visitors to internally set their own behavioral boundaries. The possibility of surveillance itself forms the boundary, independent of whether monitoring is actually taking place. It operates at the fourth stage of systemic distance (360cm+), and standard dimensions are W8 × D20 × H7cm.` },
    { id: 'b14', type: 'basic', label: '14', face: 'face-bottom', x: 11, y: 67, w: 88, h: 88, targetZone: 'zone-orange', title: '바닥 타일 (Floor Tile)', text: `바닥 타일은 전시장에 기본적으로 설치되는 기초설비로, 점토를 구워서 만든 작고 얇은 물건으로 벽·바닥 등에 붙여 치장하는 데 쓰는 마감재다. 세라믹·포슬린·천연석 등 다양한 소재로 제작되며, 표면 질감과 색상·패턴에 따라 공간의 영역 전환을 시각적·촉각적으로 인지시킨다. 줄눈의 방향과 타일의 배열 패턴이 동선을 암묵적으로 유도한다.\n\n전시 공간에서 바닥 타일은 물리적인 벽 없이 재질이나 색상의 변화만으로 영역의 전환을 인지시킨다. 발바닥을 통해 다른 구역에 진입했음을 직접적으로 감지하게 하며, 타일 패턴의 방향이 관람객의 동선을 자연스럽게 유도한다. 일반적인 규격은 W30 × D30 × H1cm다.\n\nFloor tile is a base fixture installed as standard in exhibition spaces, a finishing material made by firing clay into small, thin pieces used to decorate walls and floors. It is produced from various materials including ceramic, porcelain, and natural stone, with spatial transitions communicated visually and tactilely through changes in surface texture, color, and pattern. Grout direction and tile arrangement patterns implicitly guide visitor movement.\n\nIn an exhibition space, floor tiles communicate spatial transitions through changes in material or color alone, without any physical wall. Visitors directly sense entry into a different zone through the soles of their feet, while the direction of tile patterns naturally guides movement. Standard dimensions are W30 × D30 × H1cm.` },
    { id: 'b15', type: 'basic', label: '15', face: 'face-bottom', x: 34, y: 273, w: 65, h: 130, targetZone: 'zone-mint', title: '안내 데스크 (Information Desk)', text: `안내데스크는 전시장에 기본적으로 설치되는 기초설비로, 입장권 발권·안내·물품 대여 등의 서비스를 제공하는 카운터형 가구다. 목재·금속·아크릴 등으로 제작되며, 주로 전시장 입구에 배치되어 관람객이 전시 공간에 진입하기 전 거치는 첫 번째 구조물로 기능한다.\n\n전시 공간에서 안내데스크는 전시 공간과 외부 사이의 의례적 관문을 형성한다. 데스크를 통과하는 행위 자체가 전시 관람의 시작을 알리는 경계 통과 의식이 되며, 데스크 너머로의 진입은 암묵적인 행동 규범이 적용되는 공간으로의 진입을 의미한다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W100 × D50 × H70cm다.\n\nAn information desk is a base fixture installed as standard in exhibition spaces, a counter-type piece of furniture providing services such as ticketing, guidance, and equipment rental. Made from wood, metal, or acrylic, it is typically placed at the exhibition entrance and functions as the first structure visitors encounter before entering the exhibition space.\n\nIn an exhibition space, the information desk forms a ritual gateway between the exhibition space and the outside world. The act of passing through the desk itself becomes a boundary-crossing ceremony marking the beginning of the viewing experience, and entry beyond the desk signifies entry into a space governed by implicit codes of behavior. It operates at the second and third stages of proxemic distance (45–360cm), and standard dimensions are W100 × D50 × H70cm.` },
    { id: 'b16', type: 'basic', label: '16', face: 'face-bottom', x: 329, y: 118, w: 48, h: 48, targetZone: 'zone-mint', title: '기둥 (Column)', text: `기둥은 전시장에 기본적으로 설치되는 기초설비로, 건물의 하중을 지지하기 위해 수직으로 세워진 구조 부재다. 콘크리트·철골·목재 등 다양한 소재로 제작되며, 단면 형태는 원형·사각형·다각형으로 나뉜다. 건축 구조상 위치와 간격이 고정되어 있어 전시 공간의 기본 골격을 형성한다.\n\n전시 공간에서 기둥은 제거하거나 이동할 수 없는 고정 경계로 작동한다. 기둥이 놓인 위치에 따라 공간이 자연스럽게 구획되며, 관람객의 시선과 동선이 기둥을 중심으로 분기된다. 이 콜렉션에서 유일하게 전시자의 의도와 무관하게 존재하는 가벽이다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W40 × D40 × H250cm다.\n\nA column is a base fixture installed as standard in exhibition spaces, a vertical structural member erected to support the load of a building. Made from various materials including concrete, steel, and timber, cross-sectional forms are divided into circular, square, and polygonal types. Its position and spacing are fixed by architectural structure, forming the fundamental skeleton of the exhibition space.\n\nIn an exhibition space, the column functions as a fixed boundary that cannot be removed or relocated. Space is naturally partitioned according to column placement, with visitor sightlines and movement routes branching around each column. It is the only boundary in this collection that exists independently of any curatorial intention. It operates at the third stage of proxemic distance (120–360cm), and standard dimensions are W40 × D40 × H250cm.` },
    { id: 'b17', type: 'basic', label: '17', face: 'face-bottom', x: 436, y: 295, w: 88, h: 88, targetZone: 'zone-orange', title: '점자블록 (Tactile Paving)', text: `점자블록은 전시장에 기본적으로 설치되는 기초설비로, 시각장애인의 보행 안전을 위해 바닥에 설치하는 돌기형 표면 처리 블록이다. 선형 돌기(유도블록)와 점형 돌기(경고블록)의 두 종류로 나뉘며, 황색 계열로 제작되어 저시력자에게도 시각적으로 인지될 수 있도록 한다.\n\n전시 공간에서 점자블록은 발바닥의 촉각적 신호를 통해 방향과 경고를 전달하는 경계 장치다. 유도블록은 이동 경로를 설정하고, 경고블록은 위험 지점이나 구역 전환점을 표시한다. 시각과 촉각 모두에 동시에 작용하는 이중 채널 경계이며, 이 콜렉션에서 접근성을 위해 설계된 유일한 가벽이다. 거리감은 1·3단계(0–45cm, 120–360cm)에서 작동하며, 일반적인 크기는 W30 × D30 × H1cm다.\n\nTactile paving is a base fixture installed as standard in exhibition spaces, a surface-treated block with raised dots installed on floors for the safe navigation of visually impaired visitors. Divided into two types — linear raised strips (guidance blocks) and dotted raised surfaces (warning blocks) — it is manufactured in yellow tones to remain visually perceptible to those with low vision.\n\nIn an exhibition space, tactile paving functions as a boundary device that conveys direction and warning through tactile signals transmitted via the soles of the feet. Guidance blocks define movement routes while warning blocks mark hazard points and spatial transitions. It is a dual-channel boundary that acts simultaneously on both vision and touch, and is the only boundary in this collection designed specifically for accessibility. It operates at the first and third stages of proxemic distance (0–45cm, 120–360cm), and standard dimensions are W30 × D30 × H1cm.` },
    { id: 'b18', type: 'basic', label: '18', face: 'face-bottom', x: 563, y: 58, w: 19, h: 226, targetZone: 'zone-yellow', title: '매립형 레일 (Recessed Floor Rail)', text: `매립형 레일은 전시장에 기본적으로 설치되는 기초설비로, 바닥면에 매립하여 파티션·가벽·전시대 등의 구조물을 고정하거나 이동시키는 홈 형태의 레일 시스템이다. 알루미늄·스틸 재질로 제작되며, 레일을 따라 구조물을 슬라이딩 방식으로 배치할 수 있어 공간 구성의 유연성을 높인다.\n\n전시 공간에서 매립형 레일은 그 자체로 경계를 형성하기보다 다른 가벽의 설치 경로를 규정한다. 바닥에 새겨진 선이 공간의 분할 가능성을 암시하며, 레일 위에 구조물이 없어도 관람객은 레일 선을 따라 구역의 구분을 인식하는 경향이 있다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W200 × D5 × H3cm다.\n\nA recessed floor rail is a base fixture installed as standard in exhibition spaces, a groove-type rail system embedded in the floor surface for fixing or moving structures such as partitions, temporary walls, and display stands. Made from aluminum or steel, structures can be positioned using a sliding method along the rail, increasing the flexibility of spatial configuration.\n\nIn an exhibition space, the recessed floor rail defines the installation path for other boundaries rather than forming a boundary itself. The line engraved in the floor implies the possibility of spatial division, and even in the absence of any structure on the rail, visitors tend to perceive zone boundaries along the line. It operates at the third stage of proxemic distance (120–360cm), and standard dimensions are W200 × D5 × H3cm.` },
  ];
  
  // 3. 기초설비 렌더링
  BUTTON_DATA.forEach(btn => {
    const faceEl = document.getElementById(btn.face);
    if (!faceEl) return;
    const btnEl = document.createElement('div');
    btnEl.className = 'bb';
    btnEl.style.left = btn.x + 'px';
    btnEl.style.top = btn.y + 'px';
    btnEl.style.width = btn.w + 'px';
    btnEl.style.height = btn.h + 'px';
    btnEl.innerHTML = `<span class="bl">${btn.label}</span>`;
    btnEl.addEventListener('click', (e) => {
      e.stopPropagation();
      activateZone(btn);
    });
    faceEl.appendChild(btnEl);
  });
  
  // 4. 추가설비 데이터
  const EXTRA_DATA = [
    // 08 천장
    { face:'face-top', x:340, y:82, label:'19', type:'material', targetZone:'zone-blue', title:'산업용 비닐 커튼 (Industrial Vinyl Curtain)', text:`산업용 비닐 커튼은 전시 목적으로 별도 반입되는 추가설비로, 투명 PVC 비닐 스트립을 천장 레일에 연속으로 늘어뜨려 설치하는 경계 장치다. 각 스트립의 폭은 20–30cm, 두께는 2–3mm이며, 스트립이 일정 간격으로 중첩되어 연속적인 면을 형성한다.\n\n전시 공간에서 산업용 비닐 커튼은 시야는 확보하되 온도와 냄새의 이동을 간헐적으로 조절한다. 반투명한 면이 공간을 구획하면서도 내부를 완전히 차단하지 않아, 관람객은 경계 너머를 희미하게 인식하면서도 물리적으로는 진입이 제한된 상태를 경험한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D0.3 × H200cm다.\n\nAn industrial vinyl curtain is an additional fixture brought in separately for exhibition purposes, a boundary device installed by hanging continuous strips of transparent PVC vinyl from ceiling rails.\n\nIn an exhibition space, the industrial vinyl curtain maintains visual clarity while intermittently regulating the movement of temperature and odor. It operates at the second stage of appreciative distance (45–120cm), and standard dimensions are W200 × D0.3 × H200cm.` },
    { face:'face-top', x:480, y:150, label:'20', type:'material', targetZone:'zone-green', title:'빔프로젝터 (Beam Projector)', text:`빔프로젝터는 전시 목적으로 별도 반입되는 추가설비로, 광원에서 발생한 빛을 렌즈를 통해 스크린이나 벽면에 투사하는 장치다.\n\n전시 공간에서 빔프로젝터는 빛이 닿는 영역 자체가 경계면이 된다. 장치를 끄는 순간 경계가 소멸한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W40 × D30 × H18cm다.\n\nA beam projector is an additional fixture. In an exhibition space, the beam projector turns the area the light reaches into the boundary surface itself. It operates at the second stage of appreciative distance (45–120cm).` },
    { face:'face-top', x:20, y:225, label:'21', type:'material', targetZone:'zone-blue', title:'와이어 로프 (Wire Rope)', text:`와이어 로프는 전시 목적으로 별도 반입되는 추가설비로, 가는 금속 선을 꼬아 만든 케이블을 기둥이나 벽면 사이에 팽팽하게 연결하는 구조물이다.\n\n전시 공간에서 와이어 로프는 이 콜렉션에서 가장 최소한의 물질 경계다. 시선을 완전히 차단하지 않으면서도 관람객의 신체적 접근을 제한한다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W300 × D0.5 × H100cm다.\n\nA wire rope is the most minimal material boundary in this collection. It restricts physical visitor access without completely blocking sightlines. It operates at the third stage of proxemic distance (120–360cm).` },
    // 09 앞벽
    { face:'face-back', x:30, y:130, label:'22', type:'material', targetZone:'zone-green', title:'도슨트 (Docent)', text:`도슨트는 전시 목적으로 별도 배치되는 추가설비로, 전시장 내에서 작품 해설과 관람 안내를 수행하는 인적 경계 장치다.\n\n전시 공간에서 도슨트는 이 콜렉션에서 유일하게 살아있는 가벽이다. 신체의 위치와 시선의 방향이 관람객의 동선을 유도하며, 목소리의 방향과 크기가 관람 가능한 영역의 반경을 설정한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W50 × D30 × H170cm다.\n\nA docent is the only living boundary in this collection. The position of the body and direction of gaze guide visitor movement. It operates at the fourth stage of systemic distance (360cm+).` },
    { face:'face-back', x:20, y:390, label:'23', type:'material', targetZone:'zone-green', title:'유리 파티션 (Glass Partition)',  text:`유리 파티션은 전시 목적으로 별도 반입되는 추가설비로, 투명한 유리 패널로 공간을 시각적으로 개방하면서도 물리적으로 구획하는 경계 장치다.\n\n전시 공간에서 유리 파티션은 보이지만 갈 수 없는 공간을 만든다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W100 × D1 × H170cm다.\n\nA glass partition creates a space that is visible but unreachable. It operates at the third stage of proxemic distance (120–360cm).` },
    { face:'face-back', x:400, y:200, label:'24', type:'immaterial', targetZone:'zone-green', title:'계수기 (People Counter)', text:`계수기는 전시장에 기본적으로 설치되는 기초설비로, 적외선·열화상·레이더 센서를 활용하여 특정 지점을 통과하는 인원을 자동으로 집계하는 디지털 감지 장치다.\n\n전시 공간에서 계수기는 경계를 통과하는 행위 자체를 수치화하여 경계의 존재를 데이터로 증명한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W3 × D3 × H4cm다.\n\nA people counter automatically tallies individuals passing through a specific point. It operates at the fourth stage of systemic distance (360cm+).` },
    // 11 좌벽
    { face:'face-left', x:175, y:55, label:'25', type:'material', targetZone:'zone-blue', title:'천 커튼 (Fabric Curtain)', text:`천 커튼은 전시 목적으로 별도 반입되는 추가설비로, 직물 소재의 패널을 천장의 레일이나 봉에 매달아 공간을 구획하는 가변적 경계 장치다.\n\n전시 공간에서 천 커튼은 시선을 실루엣과 윤곽만 남기고 내용을 걸러낸다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W200 × D0.3 × H300cm다.\n\nA fabric curtain filters out content leaving only silhouettes and outlines visible. It operates at the third stage of proxemic distance (120–360cm).` },
    { face:'face-left', x:120, y:175, label:'26', type:'material', targetZone:'zone-blue', title:'거울 (Mirror)', text:`거울은 전시 목적으로 별도 반입되는 추가설비로, 유리 표면에 반사 코팅을 처리하여 빛을 정반사하는 수직 구조물이다.\n\n전시 공간에서 거울은 실제 공간의 한계를 깨고 가상의 깊이감을 만든다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W70 × D1 × H100cm다.\n\nA mirror breaks the limits of actual space and creates an illusory sense of depth. It operates at the second stage of appreciative distance (45–120cm).` },
    { face:'face-left', x:50, y:285, label:'27', type:'immaterial', targetZone:'zone-green', title:'비콘 (Beacon)', text:`비콘은 전시 목적으로 별도 반입되는 추가설비로, BLE·UWB 등의 무선 주파수를 발신하여 기기의 위치와 진입을 감지하는 디지털 경계 장치다.\n\n전시 공간에서 비콘은 빛도 소리도 형태도 없이 존재하는 경계다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W4 × D4 × H3cm다.\n\nA beacon is a boundary that exists without light, sound, or form. It operates at the second stage of appreciative distance (45–120cm).` },
    { face:'face-left', x:220, y:355, label:'28', type:'immaterial', targetZone:'zone-green', title:'향기 (Scent)', text:`향기는 전시 목적으로 별도 반입되는 추가설비로, 인센스·디퓨저·향수 분사기 등을 통해 특정 향 성분을 대기 중에 확산시켜 후각적으로 영역을 구분하는 비물질적 경계 장치다.\n\n전시 공간에서 향기는 이 콜렉션에서 가장 잔류 지속성이 강한 비물질적 경계다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W10 × D10 × H10cm다.\n\nScent is the most residually persistent of all non-material boundaries in this collection. It operates at the first stage of intimate distance (0–45cm).` },
    { face:'face-left', x:30, y:390, label:'29', type:'immaterial', targetZone:'zone-blue', title:'스모그 머신 (Smoke Machine)', text:`스모그 머신은 전시 목적으로 별도 반입되는 추가설비로, 글리콜 계열의 액체를 가열하여 인공 안개를 생성하고 공간에 분사하는 장치다.\n\n전시 공간에서 스모그 머신은 공기 자체를 불투명하게 만들어 시야를 차단하는 비물질적 경계를 형성한다. 거리감은 1·3단계(0–45cm, 120–360cm)에서 작동하며, 일반적인 크기는 W47 × D20 × H20cm다.\n\nA smoke machine creates a non-material boundary by rendering the air itself opaque to block vision.` },
    // 12 우벽
    { face:'face-right', x:60, y:80, label:'30', type:'material', targetZone:'zone-green', title:'암막 커튼 (Blackout Curtain)',text:`암막 커튼은 전시 목적으로 별도 반입되는 추가설비로, 빛의 투과를 완전히 차단하는 특수 코팅 직물이다.\n\n전시 공간에서 암막 커튼은 천 커튼이 실루엣을 남기는 것과 달리 존재 자체를 지운다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W200 × D0.5 × H300cm다.\n\nA blackout curtain erases existence entirely. It operates at the third stage of proxemic distance (120–360cm).` },
    { face:'face-right', x:370, y:55, label:'31', type:'material', targetZone:'zone-purple', title:'스피커 (Speaker)', text:`스피커는 전시 목적으로 별도 반입되는 추가설비로, 전기 신호를 공기 진동으로 변환하여 소리를 발생시키는 장치다.\n\n전시 공간에서 스피커는 소리가 닿는 영역과 닿지 않는 영역 사이에 청각적 경계를 만든다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W22 × D20 × H30cm다.\n\nA speaker creates an auditory boundary between zones the sound reaches and those it does not. It operates at the second stage of appreciative distance (45–120cm).` },
    { face:'face-right', x:235, y:200, label:'32', type:'material', targetZone:'zone-purple', title:'시트지 (Vinyl Lettering)',text:`시트지는 전시 목적으로 별도 반입되는 추가설비로, 접착제가 도포된 얇은 PVC 필름을 유리·벽면·바닥에 부착하여 텍스트·그래픽·패턴을 구현하는 재료다.\n\n전시 공간에서 시트지는 이 콜렉션에서 가장 얇은 물질 경계다. 두께가 0.1mm에 불과하지만 부착된 표면의 성격을 완전히 바꾼다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 치수는 W200 × H100cm(가변)다.\n\nVinyl lettering is the thinnest material boundary in this collection. It operates at the second stage of appreciative distance (45–120cm).` },
    { face:'face-right', x:80, y:320, label:'33', type:'immaterial', targetZone:'zone-green', title:'레이저 (Laser)', text:`레이저는 전시 목적으로 별도 반입되는 추가설비로, 단일 파장의 빛을 집중적으로 방출하여 허공에 가시적인 선을 투사하는 광학 경계 장치다.\n\n전시 공간에서 레이저는 빛이 소거되는 순간 경계 자체가 사라진다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W3 × D5 × H3cm다.\n\nA laser boundary disappears the moment the light is extinguished. It operates at the fourth stage of systemic distance (360cm+).` },
    { face:'face-right', x:200, y:330, label:'34', type:'material', targetZone:'zone-yellow', title:'단방향 거울 (One-Way Mirror)', text:`단방향 거울은 전시 목적으로 별도 반입되는 추가설비로, 한쪽에서는 거울로, 반대쪽에서는 유리로 작동하는 특수 유리다.\n\n전시 공간에서 단방향 거울은 보는 방향에 따라 경계의 성격이 완전히 달라진다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W50 × D1 × H100cm다.\n\nA one-way mirror changes its character entirely depending on the direction from which it is viewed. It operates at the second stage of appreciative distance (45–120cm).` },
    // 10 바닥
    { face:'face-bottom', x:130, y:75, label:'35', type:'material', targetZone:'zone-mint', title:'멀티탭 (Power Strip)', text:`멀티탭은 전시 목적으로 별도 반입되는 추가설비로, 하나의 전원 플러그에서 여러 개의 콘센트를 분기하여 다수의 전기 기기에 전력을 공급하는 장치다.\n\n전시 공간에서 멀티탭은 전기 장치들이 밀집하는 지점을 만들어 간접적으로 공간의 구역을 규정한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W200 × D7 × H5cm다.\n\nA power strip indirectly defines spatial zones by creating points of concentration for electrical devices.` },
    { face:'face-bottom', x:420, y:165, label:'36', type:'material', targetZone:'zone-mint', title:'의자 (Chair)', text:`의자는 전시 목적으로 별도 반입되는 추가설비로, 한 사람이 앉을 수 있도록 설계된 등받이가 있는 좌석 가구다.\n\n전시 공간에서 의자는 앉는 행위 자체가 관람의 방식을 변환시키는 경계 장치다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W50 × D50 × H70cm다.\n\nA chair transforms the mode of viewing through the act of sitting itself. It operates at the second and third stages of proxemic distance (45–360cm).` },
    { face:'face-bottom', x:260, y:350, label:'38', type:'material', targetZone:'zone-mint', title:'벨트형 차단봉 (Retractable Barrier)', text:`벨트형 차단봉은 전시 목적으로 별도 반입되는 추가설비로, 금속 기둥에 수납된 벨트를 인출하여 관람객의 이동을 제한하는 경계 장치다.\n\n전시 공간에서 벨트형 차단봉은 벨트의 물리적 저항은 미약하지만 관람객은 강한 심리적 부담을 느낀다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W100 × D15 × H70cm다.\n\nA retractable barrier creates strong psychological pressure despite minimal physical resistance. It operates at the third stage of proxemic distance (120–360cm).` },
    { face:'face-bottom', x:260, y:300, label:'39', type:'material', targetZone:'zone-orange', title:'마스킹 테이프 (Masking Tape)', text:`마스킹 테이프는 전시 목적으로 별도 반입되는 추가설비로, 얇고 찢어지기 쉬운 종이와 쉽게 떼어지는 점착제로 만든 표면 경계 장치다.\n\n전시 공간에서 마스킹 테이프는 물리적 저항 없이 심리적 구역을 설정한다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W5 × D7cm다.\n\nMasking tape establishes a psychological zone without any physical resistance. It operates at the first stage of intimate distance (0–45cm).` },
    { face:'face-bottom', x:160, y:230, label:'40', type:'material', targetZone:'zone-mint', title:'물품 보관함 (Locker)', text:`물품 보관함은 전시장에 기본적으로 설치되는 기초설비로, 관람객의 소지품을 일시적으로 보관하는 잠금 장치가 달린 수납 구조물이다.\n\n전시 공간에서 물품 보관함은 관람객이 소지품을 맡기고 진입하는 의례적 경계를 형성한다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W120 × D50 × H170cm다.\n\nA locker forms a ritual gateway through which visitors pass by leaving their belongings behind.` },
    { face:'face-bottom', x:480, y:250, label:'41', type:'material', targetZone:'zone-orange', title:'바닥 카펫 (Floor Carpet)', text:`바닥 카펫은 전시 목적으로 별도 반입되는 추가설비로, 양의 털·목화·비단 등으로 만든 직물로 바닥에 깔아 사용하는 섬유 소재의 경계 장치다.\n\n전시 공간에서 바닥 카펫은 발걸음 소리를 흡수하여 공간의 음향 밀도를 낮추고 보행 속도를 자연스럽게 늦춘다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W150 × D150 × H1cm다.\n\nA floor carpet absorbs footstep sounds and naturally slows walking pace. It operates at the second and third stages of proxemic distance (45–360cm).` },
    { face:'face-bottom', x:590, y:280, label:'45', type:'immaterial', targetZone:'zone-orange', title:'공기청정기 (Air Purifier)', text:`공기청정기는 전시장에 기본적으로 설치되는 기초설비로, 팬을 통해 공기를 흡입하고 필터를 거쳐 정화된 공기를 방출하는 장치다.\n\n전시 공간에서 공기청정기가 작동하는 구역은 냄새와 공기 질의 차이를 통해 감지되는 경계가 형성된다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W40 × D40 × H50cm다.\n\nAn air purifier creates boundaries through differences in odor and air quality.` },
    { face:'face-bottom', x:400, y:310, label:'46', type:'material', targetZone:'zone-orange', title:'벤치 (Bench)', text:`벤치는 전시 목적으로 별도 반입되는 추가설비로, 등받이 없이 여러 사람이 나란히 앉을 수 있는 긴 형태의 좌석이다.\n\n전시 공간에서 벤치는 앉는 방향과 배치 각도에 따라 관람객의 시선과 동선이 결정된다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W200 × D40 × H70cm다.\n\nA bench determines visitor sightlines and movement routes through its direction and placement angle.` },
    { face:'face-bottom', x:590, y:165, label:'47', type:'material', targetZone:'zone-orange', title:'책장 (Bookshelf)', text:`책장은 전시 목적으로 별도 반입되는 추가설비로, 선반을 층층이 배열하여 책이나 오브제를 진열하는 구조물이다.\n\n전시 공간에서 책장은 불투명한 면은 시각을 차단하고 개방된 선반 사이로 반대편이 부분적으로 보이는 반투과적 경계를 만든다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W120 × D30 × H170cm다.\n\nA bookshelf creates a semi-transparent boundary. It operates at the third stage of proxemic distance (120–360cm).` },
    { face:'face-bottom', x:590, y:125, label:'48', type:'material', targetZone:'zone-orange', title:'행거 (Clothes Rack)', text:`행거는 전시 목적으로 별도 반입되는 추가설비로, 옷이나 오브제를 매달아 진열하거나 보관하는 수직 구조물이다.\n\n전시 공간에서 행거는 매달린 오브제들이 불규칙한 면을 형성하며 공간을 구분한다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W100 × D50 × H120cm다.\n\nA clothes rack divides space through an irregular surface formed by hung objects. It operates at the third stage of proxemic distance (120–360cm).` },
  ];
  
  // 5. 추가설비 렌더링
  EXTRA_DATA.forEach(item => {
    const faceEl = document.getElementById(item.face);
    if (!faceEl) return;
    const el = document.createElement('span');
    el.className = `extra-item ${item.type}`;
    el.style.left = item.x + 'px';
    el.style.top = item.y + 'px';
    el.textContent = item.label;
    el.addEventListener('click', e => {
      e.stopPropagation();
      activateZone({
        id: item.face + '_' + item.label,
        targetZone: item.targetZone,
        title: item.title,
        img: item.img,
        text: item.text,
        type: 'extra'
      });
    });
    faceEl.appendChild(el);
  });
  
 // 6. 동기화 스크롤 엔진 (모서리 꺾임 버그 완벽 수정본)
function activateZone(btn) {
    // 💡 인트로 안 끝났으면 클릭 방지!
    if (!isIntroDone) return; 
  
    const existingZones = document.querySelectorAll(`.dynamic-zone.${btn.targetZone}`);
    let isAlreadyOpen = false;
    if (existingZones.length > 0 && existingZones[0].dataset.btnId === btn.id) isAlreadyOpen = true;
    existingZones.forEach(el => el.remove());
    if (isAlreadyOpen) return;
  
    const parts = ZONE_DATA[btn.targetZone];
    if (!parts) return;
  
    let totalW = parts[0].w;
    let totalH = parts[0].h;
    parts[0].offsetX = 0;
    parts[0].offsetY = 0;
    parts[0].isRotated = false;
  
    // 💡 문제의 원인 해결: 어떤 비율의 벽이든 자연스럽게 이어지도록 조건문 완화!
    for (let i = 1; i < parts.length; i++) {
      const curr = parts[i];
      const prev = parts[i - 1];
      
      if (curr.h === prev.h) {
        // 가로 흐름 (예: 왼쪽 벽 -> 정면 벽)
        curr.isRotated = false;
        curr.offsetX = prev.offsetX + prev.w;
        curr.offsetY = prev.offsetY;
        totalW = Math.max(totalW, curr.offsetX + curr.w);
      } else if (curr.w === prev.w) {
        // 세로 흐름 (예: 천장 -> 정면 벽)
        curr.isRotated = false;
        curr.offsetX = prev.offsetX;
        curr.offsetY = prev.offsetY + prev.h;
        totalH = Math.max(totalH, curr.offsetY + curr.h);
      } else if (curr.w === prev.h || curr.h === prev.w) {
        // 90도 꺾임 (예: 천장 -> 오른쪽 벽)
        curr.isRotated = true;
        curr.offsetX = prev.offsetX + prev.w;
        curr.offsetY = prev.offsetY;
        totalW += (curr.w === prev.h) ? curr.h : curr.w;
      } else {
        // 안전 장치
        curr.isRotated = false;
        curr.offsetX = prev.offsetX;
        curr.offsetY = prev.offsetY;
      }
    }
  
    const maxContentW = Math.max(totalW, ...parts.map(p => p.isRotated ? p.h : p.w));
  
    const hiddenPaper = document.createElement('div');
    hiddenPaper.style.visibility = 'hidden';
    hiddenPaper.style.position = 'absolute';
    hiddenPaper.style.width = maxContentW + 'px';
    let paperContent = `<div class="zc" style="position:relative;">`;
    if (btn.img) paperContent += `<img src="${btn.img}" style="width:100%;display:block;margin-bottom:15px;">`;
    paperContent += `<div class="zt">${btn.title}</div><div class="zx">${btn.text.replace(/\n/g, '<br>')}</div></div>`;
    hiddenPaper.innerHTML = paperContent;
    document.body.appendChild(hiddenPaper);
  
    function renderZones() {
      const docHeight = hiddenPaper.scrollHeight;
      if (document.body.contains(hiddenPaper)) document.body.removeChild(hiddenPaper);
  
      let currentScroll = 0;
      const scrollGroup = [];
      const viewportH = parts[0].h;
  
      parts.forEach((part) => {
        const faceEl = document.getElementById(part.face);
        if (!faceEl) return;
  
        const zEl = document.createElement('div');
        zEl.className = `dynamic-zone ${btn.targetZone}`;
        zEl.dataset.btnId = btn.id;
        zEl.style.left = part.x + 'px';
        zEl.style.top = part.y + 'px';
        zEl.style.width = part.w + 'px';
        zEl.style.height = part.h + 'px';
        zEl.style.overflow = 'hidden';
  
        let content = `<div class="zc" style="width:${maxContentW}px;transform-origin:0 0;position:absolute;left:0;top:0;">`;
        if (btn.img) content += `<img src="${btn.img}" class="zi" style="width:100%;display:block;margin-bottom:15px;">`;
        content += `<div class="zt">${btn.title}</div><div class="zx">${btn.text.replace(/\n/g, '<br>')}</div></div>`;
        zEl.innerHTML = content;
  
        const innerContent = zEl.querySelector('.zc');
        scrollGroup.push({ el: innerContent, sX: part.offsetX, sY: part.offsetY, isRotated: part.isRotated, partW: part.w });
  
        if (part.isRotated) {
          innerContent.style.transform = `translateX(${part.w}px) rotate(90deg) translate(-${part.offsetX}px, -${part.offsetY}px)`;
        } else {
          innerContent.style.transform = `translate(-${part.offsetX}px, -${part.offsetY}px)`;
        }
  
        zEl.addEventListener('wheel', (e) => {
          e.preventDefault();
          const maxScroll = Math.max(0, docHeight - viewportH);
          currentScroll += e.deltaY;
          currentScroll = Math.max(0, Math.min(currentScroll, maxScroll));
          scrollGroup.forEach(group => {
            if (group.isRotated) {
              group.el.style.transform = `translateX(${group.partW}px) rotate(90deg) translate(-${group.sX}px, calc(-${group.sY}px - ${currentScroll}px))`;
            } else {
              group.el.style.transform = `translate(-${group.sX}px, calc(-${group.sY}px - ${currentScroll}px))`;
            }
          });
        });
  
        zEl.addEventListener('click', (e) => e.stopPropagation());
        faceEl.appendChild(zEl);
      });
    }
  
    const paperImg = hiddenPaper.querySelector('img');
    if (paperImg && !paperImg.complete) {
      paperImg.onload = renderZones;
      paperImg.onerror = renderZones;
    } else {
      renderZones();
    }
  }