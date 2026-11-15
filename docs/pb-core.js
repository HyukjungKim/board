// 묻힌 태양 프롬프트북 — 스타일, 영웅, 영웅 모션
window.PB = [];
function A(g, k, p, id, ko, ar, t, s, ref) { PB.push({ g, k, p, id, ko, ar, t, s, ref }); }

const CORE = "dark medieval fantasy, grounded gritty painterly art in the spirit of late-1990s gothic action-RPG concept art and pre-rendered game sprites, heavy realistic proportions, weathered hand-painted textures, believable worn materials, a world of eternal dusk: bruised crimson, violet and deep indigo sky light, frosted blue-grey stone, moss green, rust red-brown, indigo and wine-coloured cloth, ordinary fire and candlelight burn pale silver-white and cold, the only warm golden light anywhere comes from glowing sunstone, nothing casts a shadow on the ground except where sunstone light falls, the shadows that do appear are ink-black with faint violet edges, one motivated light source, deep contrast, somber restrained mood";
const CORE_NOON = "dark medieval fantasy, grounded gritty painterly art in the spirit of late-1990s gothic action-RPG concept art, heavy realistic proportions, weathered textures, the Noon age three hundred years ago: a merciless white-gold sun overhead, bleached sun-scorched colours, every person and object casts a long hard ink-black shadow, heat haze, oppressive somber mood";
const NATURAL = "natural imperfect face with slight asymmetry, real skin texture and weathering, uneven wear and dirt, practical layered clothing with visible repairs, believable everyday posture, not idealised, not a fashion model";
const NEG_IMG = "text, letters, words, watermark, logo, signature, frame, border, anime, manga, cartoon, chibi, cel shading, 3d render look, unreal engine, glossy plastic, airbrushed skin, perfect symmetry, model face, beauty retouch, heroic power pose, glowing eyes, glowing runes, magic aura, sparkles, lens flare, bokeh, teal and orange grading, oversaturated, neon, blue wizard robe, pointed wizard hat, long white beard, spiked pauldrons, ornate filigree armor, skulls everywhere, cast shadow on the ground, drop shadow, extra fingers, extra limbs, deformed hands, cropped body, duplicate character";
const NEG_VID = "morphing, melting, warping, weapon disappearing, weapon changing shape or switching hands, extra limbs, missing limbs, detached arm, arm passing through the shield, hand passing through the body or weapon, extra fingers, face changing, costume changing, colour shift, flicker, camera movement, zoom, pan, cut, scene change, background change, character leaving the frame, sliding feet, floating, motion smear, text";
const REFTXT = "Use the attached reference image and keep exactly the same character, face, body proportions, costume, colours and equipment. ";

const SUF = {
  sprite: "single full-body game sprite, classic isometric three-quarter view from above with the camera tilted about 30 degrees, facing toward the lower-right, the whole figure in frame with generous space around it, standing on an invisible ground plane, no ground shadow, plain flat mid-grey background #808080, crisp readable silhouette",
  spriteB: "single full-body game sprite, classic isometric three-quarter view from above, seen from behind and facing away toward the upper-left, the whole figure in frame with generous space around it, no ground shadow, plain flat mid-grey background #808080, crisp readable silhouette",
  turn: "character model sheet: the same character shown three times side by side at the same scale, front view, side view and back view, neutral standing pose with arms slightly away from the body, plain flat light-grey background, even neutral lighting, animation and sculpting reference",
  rig: "2D skeletal animation part sheet of the same character: head, torso, upper arms, forearms, hands, thighs, shins, feet, weapon and shield painted as separate unattached pieces laid out with space between them, each piece fully painted including the parts normally hidden by overlaps, same three-quarter angle and lighting, plain flat mid-grey background",
  mini: "miniature figure sculpt reference sheet: the same character shown front, side, back and from directly above at the same scale, neutral standing pose, plain light-grey background, even lighting",
  portrait: "bust portrait, head and shoulders, three-quarter view, looking slightly off-camera, plain dark muted background, game dialogue portrait",
  shadowform: "the same character transformed into their own living kin-shadow: same pose and outline rendered as ink-black smoke and liquid shadow, elongated and subtly distorted proportions, faint violet edges, a dim warm glint where the eyes should be, costume details barely readable inside the darkness, plain flat mid-grey background",
  npc: "full-body character standing naturally, three-quarter view, plain flat mid-grey background, game NPC concept art",
  enemy: "single full-body creature game sprite, isometric three-quarter view from above, facing toward the lower-right, the whole figure in frame, no ground shadow, plain flat mid-grey background #808080, readable silhouette",
  boss: "colossal boss game sprite, isometric three-quarter view from above, the whole body in frame with space around it, plain flat mid-grey background, readable silhouette, a sense of enormous weight and scale",
  scene: "story illustration, tall vertical composition for a smartphone screen, depth and sky in the upper half, the lower quarter calmer and darker for interface text, cinematic but grounded",
  flash: "a memory of the Noon age, tall vertical composition for a smartphone screen",
  map: "isometric battle map diorama seen from a high three-quarter angle in classic 2:1 isometric projection, tall vertical layout filling a phone screen, clearly readable walkable floor areas, walls and obstacles readable from above, no grid lines, no characters, no cast shadows, game tactical battle map",
  tile: "single isometric floor tile in a 2:1 diamond shape with edges designed to tile seamlessly, seen from the isometric angle, isolated on a flat mid-grey background, no cast shadows",
  wall: "single isometric wall or structure piece for a modular game map, seen from the isometric angle, isolated on a flat mid-grey background, no cast shadows",
  prop: "single game prop, isometric three-quarter view from above, isolated on a plain flat mid-grey background, no ground shadow, readable silhouette",
  item: "single item illustration for an inventory icon and item card, three-quarter view, centered, isolated on a plain flat dark background, realistic worn materials",
  card: "card illustration, vertical composition, one clear focal subject, edges falling into darkness, no frame, no text",
  icon: "game interface icon, one bold simple symbol, centered, painted with weight and texture but still readable at 48 pixels, isolated on a pure black background, no text",
  ui: "game interface element, flat front view, symmetrical, worn dark iron, aged leather and bone materials, empty centre for content, isolated on a pure black background, no text",
  token: "a physical board game token seen from directly above, thick die-cut cardboard with painted art, slight edge wear, isolated on a plain grey background, no text",
  rule: "rulebook illustration, calm readable composition, muted area where text can sit, generous empty space, no text",
  tut: "tutorial illustration that clearly demonstrates one game action, simple uncluttered composition, the important element in the centre, no text, no arrows",
  fx: "visual effect element only, no characters, no ground, centered, on a pure black background, game VFX",
  key: "key art, tall vertical composition, strong focal point, painterly and grounded, room for a logo in the upper third, no text",
  mkt: "marketing illustration, strong focal point, no text",
  lineup: "lineup of characters standing side by side at the same scale for a height comparison chart, front three-quarter view, plain flat mid-grey background, even lighting"
};
const CHAR_T = ["sprite", "spriteB", "turn", "rig", "mini", "portrait", "shadowform", "npc", "lineup"];

const VSUF = {
  char: "Single continuous shot, locked-off static camera, the character stays in the same spot at the same size and fully in frame, the plain flat mid-grey background stays unchanged, consistent anatomy and costume, natural weight and real-world timing, 3 to 5 seconds.",
  loop: " The last frame matches the first frame so it loops seamlessly.",
  fx: "Pure black background, no camera movement, the effect plays once from start to finish and fades completely to black, 2 to 3 seconds.",
  fxloop: "Pure black background, no camera movement, seamless loop, 3 to 4 seconds.",
  amb: "Locked-off static camera, only the described elements move, slow and subtle, seamless loop, 5 to 8 seconds, no new objects appear, painterly look kept intact.",
  cine: "Slow deliberate camera move only as described, no cuts, painterly look kept intact, 5 to 8 seconds.",
  talk: "Locked-off static camera, head and shoulders stay in place, small natural breathing, one slow blink, lips move slightly as if speaking quietly, no head turning, seamless loop, 4 seconds."
};

// ---------- 영웅 ----------
const HEROES = [
  { c: "KN", ko: "기사", w: "The sword stays in the right hand and the tower shield stays on the left forearm the whole time; the left arm never passes through or outside the shield.",
    F: ["이벨린", "Evelyn, a 38-year-old woman knight, broad and heavy-set, weathered olive skin, short greying dark hair, a nose broken once and set slightly crooked, mismatched blackened plate pieces over a stained quilted gambeson, the oath sigil on her breastplate scratched away, a tall battered tower shield painted with eight faded chained seals, a small shuttered iron lantern hung on the top edge of the shield, a plain arming sword"],
    M: ["오웬", "Owen, a 41-year-old knight, broad-shouldered and thick-necked, deep brown skin, close-cut beard with grey patches, an old burn scar across one cheek, mismatched blackened plate pieces over a stained quilted gambeson, the oath sigil on his breastplate scratched away, a tall battered tower shield painted with eight faded chained seals, a small shuttered iron lantern hung on the top edge of the shield, a plain arming sword"],
    atk: "thrusts the sword forward over the top rim of the tower shield, then returns to guard",
    light: "raises the shield and flips open the lantern shutter on it, warm gold light floods forward, then a firm shield bash",
    dark: "takes one heavy step forward behind the shield",
    def: "braces behind the tower shield with knees bent, absorbing an impact" },
  { c: "BZ", ko: "광전사", w: "The axe stays gripped in both hands and keeps the same length and shape; the chains stay wrapped on the body.",
    F: ["시그룬", "Sigrun, a 30-year-old very tall muscular woman, pale freckled skin with old whip scars across the shoulders, cropped rough red-brown hair, heavy iron mine chains wrapped around her torso and forearms with a guild brand stamped on one link, a fur-trimmed leather war-kilt and hide wraps, a long two-handed bearded axe with a worn ash-wood haft, a small shuttered iron lantern hooked to her belt"],
    M: ["토르그림", "Torgrim, a 33-year-old huge-framed man, ruddy wind-burned skin, shaved head and a short rough beard, a torn earlobe, heavy iron mine chains wrapped around his torso and forearms with a guild brand stamped on one link, a fur-trimmed leather war-kilt and hide wraps, a long two-handed bearded axe with a worn ash-wood haft, a small shuttered iron lantern hooked to his belt"],
    atk: "a two-handed overhead chop with the axe, both hands stay on the haft, then recovers",
    light: "opens the lantern at the belt with one hand, grips the axe again with both hands and swings it in a wide horizontal arc",
    dark: "rolls the shoulders and stamps one step forward",
    def: "raises both chained forearms crossed in front to block" },
  { c: "RG", ko: "도적", w: "One dagger stays in each hand at all times; the character never vanishes or turns transparent.",
    F: ["미라", "Mira, a 22-year-old wiry woman, light brown skin, sharp watchful eyes, a deep hood of patched charcoal wool and a scarf over the lower face, a fitted leather jerkin with many small pouches and lockpicks, soft wrapped boots, two short curved daggers, a palm-sized shuttered lantern on a cord at her hip"],
    M: ["에반", "Evan, a 24-year-old lean young man, pale skin, a thin scar through one eyebrow, unwashed fair hair under a deep patched charcoal hood, a scarf over the lower face, a fitted leather jerkin with many small pouches and lockpicks, soft wrapped boots, two short curved daggers, a palm-sized shuttered lantern on a cord at his hip"],
    atk: "a quick lunge with the right dagger and a recovery step back",
    light: "flicks open the tiny lantern at the hip, then two fast crossing dagger slashes",
    dark: "drops into a low crouch and creeps one step, staying fully visible",
    def: "a sharp sidestep into a low crouch" },
  { c: "HT", ko: "사냥꾼", w: "The crossbow stays in both hands and keeps its shape; only the bolt leaves it.",
    F: ["로웨나", "Rowena, a 35-year-old lean wiry woman, tanned weathered skin with crow's feet, dark hair in one tight braid, a fur-lined hooded capelet over layered oiled leather, a heavy crossbow with a hand crank, a case of silver-tipped bolts, a hunting horn, a burn scar on the inside of her left wrist, a shuttered lantern strapped high on her back"],
    M: ["하르반", "Harvan, a 40-year-old gaunt man, sallow skin, black hair tied back, a long hooked nose and hollow cheeks, a fur-lined hooded capelet over layered oiled leather, a heavy crossbow with a hand crank, a case of silver-tipped bolts, a hunting horn, a burn scar on the inside of his left wrist, a shuttered lantern strapped high on his back"],
    atk: "raises, aims and shoots the crossbow with a small recoil, the bolt flies out of frame",
    light: "reaches back to open the lantern, aims carefully and shoots, the bolt flies out of frame",
    dark: "turns the hand crank to draw the string and loads a new bolt",
    def: "steps back and lowers the crossbow, bracing" },
  { c: "MG", ko: "마법사", w: "The small iron cage pendant stays on its chain in the hand; the notebooks stay chained to the belt; no staff, no hat.",
    F: ["아델라", "Adela, a 26-year-old slight woman, dark brown skin, short uneven self-cut hair, a long layered wool scholar's coat with a scorched leather apron, no hat, old burn scars over both hands and wrists, a small iron cage pendant on a chain holding a sunstone shard, worn notebooks chained to her belt"],
    M: ["테오도르", "Theodor, a 29-year-old tall thin man, pale skin, ink-stained fingers, thin wire-rimmed spectacles, untidy brown hair, a long layered wool scholar's coat with a scorched leather apron, no hat, old burn scars over both hands and wrists, a small iron cage pendant on a chain holding a sunstone shard, worn notebooks chained to his belt"],
    atk: "holds the iron cage pendant forward, a short burst of gold fire leaps from the sunstone shard toward the front",
    light: "holds the cage pendant forward with both hands, a steady stream of golden flame pours out toward the front",
    dark: "flips quickly through a chained notebook",
    def: "shields the face with a scarred forearm and turns aside" },
  { c: "NC", ko: "강령술사", w: "The chain stays wound on the left forearm and stays one continuous chain; the small shadow stays attached to the end of it.",
    F: ["에스카", "Eska, a 44-year-old gaunt woman of the wandering Ash Folk, grey-streaked black hair in a long braid, sunken tired eyes, layers of patched ash-grey travel cloaks, a thin iron chain wound around her left forearm leading down to a small child-sized smear of living darkness at her feet, a shuttered iron lantern at her hip"],
    M: ["말코", "Malko, a 47-year-old gaunt man of the wandering Ash Folk, long grey-streaked hair, deep-set tired eyes, a scraggly short beard, layers of patched ash-grey travel cloaks, a thin iron chain wound around his left forearm leading down to a small child-sized smear of living darkness at his feet, a shuttered iron lantern at his hip"],
    atk: "lashes the iron chain forward, the small shadow at its end lunges out and snaps back",
    light: "opens the lantern at the hip, the small shadow turns solid black and leaps forward on its chain",
    dark: "kneels and whispers to the small shadow, one hand near it",
    def: "pulls the chain tight and steps back, the small shadow cowering behind the legs" },
  { c: "AL", ko: "연금술사", w: "Only the thrown vial leaves the hand; all other vials stay on the bandoliers; the chain-mesh veil stays on the face.",
    F: ["오틸리아", "Ottilia, a 50-year-old stout woman, ruddy cheeks, grey hair pinned up, the lower half of her face veiled with fine chain mesh, several layered stained aprons, elbow-length leather gloves, bandoliers of corked glass vials with cloudy liquids across chest and waist, none of them glowing, a brass hand mortar at the hip, a shuttered lantern on a short pole"],
    M: ["오스윈", "Oswin, a 52-year-old heavyset bald man, pockmarked cheeks, thick grey eyebrows, the lower half of his face veiled with fine chain mesh, several layered stained aprons, elbow-length leather gloves, bandoliers of corked glass vials with cloudy liquids across chest and waist, none of them glowing, a brass hand mortar at the hip, a shuttered lantern on a short pole"],
    atk: "takes one vial from the bandolier and throws it underhand forward, the vial flies out of frame",
    light: "opens the lantern on the pole, uncorks a vial and pours it on the ground in front, warm steam rises",
    dark: "grinds something in the brass mortar with quick strokes",
    def: "turns a shoulder forward and covers the vials with both arms" },
  { c: "SH", ko: "주술사", w: "The frame drum stays in the left hand and the beater in the right hand; the antler crown stays on the head.",
    F: ["오르나", "Orna, a woman in her seventies, small and stooped, deeply lined dark skin, milky white eyes, a crown of small bleached antlers bound with grey wool, dozens of knotted cords hanging at her waist, thin lines of ash paint on her face, a round hide frame drum and beater, layered ash-coloured wraps, a shuttered lantern tied to a walking stick slung on her back"],
    M: ["오르반", "Orban, a man in his seventies, lean and stooped, weathered olive-brown skin, milky white eyes, a sparse grey beard braided short, a crown of small bleached antlers bound with grey wool, dozens of knotted cords hanging at his waist, thin lines of ash paint on his face, a round hide frame drum and beater, layered ash-coloured wraps, a shuttered lantern tied to a walking stick slung on his back"],
    atk: "strikes the frame drum twice, dust ripples outward along the ground",
    light: "opens the lantern, raises the drum high and strikes one slow heavy beat",
    dark: "counts the knotted cords at the waist with the fingers, lips moving",
    def: "hunches and holds the drum in front like a small shield" }
];

const H_ACT = [
  ["idle", "대기", 1, true, "standing idle, slow natural breathing, a small weight shift, the lantern sways very slightly"],
  ["walk", "걷기", 1, true, "walking forward in place as a walk cycle, steady natural pace, feet lift and land cleanly without sliding"],
  ["atk", "기본 공격", 1, false, null],
  ["light", "빛 스킬", 2, false, null],
  ["dark", "어둠 행동", 2, false, null],
  ["def", "방어", 2, false, null],
  ["open", "등갓 열기", 1, false, "lifts the lantern and opens its iron shutter, warm gold light spills out and lights the figure from one side"],
  ["close", "등갓 닫기", 2, false, "closes the iron shutter of the lantern, the warm gold light is cut off and the figure is lit only by cold dusk light again"],
  ["hit", "피격", 2, false, "flinches from a blow from the front, staggers half a step back and recovers"],
  ["down", "쓰러짐(끌림)", 2, false, "drops to one knee, then sinks to the ground on one side, exhausted, thin ink-black tendrils tug at the feet"],
  ["revive", "일어남", 2, false, "pushes up from the ground to standing with visible effort"],
  ["interact", "조사·상호작용", 2, false, "kneels and works with both hands at something low in front, then stands"],
  ["victory", "승리", 2, false, "lowers the weapon and lets out a long breath of relief, a small tired nod, not a heroic pose"],
  ["level", "레벨업", 2, false, "straightens up and closes the eyes for a moment, a faint pale glow passes over the body and fades"]
];

const EN = { KN: "knight", BZ: "berserker", RG: "rogue", HT: "hunter", MG: "mage", NC: "necromancer", AL: "alchemist", SH: "shaman" };
HEROES.forEach(h => {
  ["F", "M"].forEach(sx => {
    const [nm, d] = h[sx]; const id = h.c + "-" + sx; const g = sx === "F" ? "여" : "남";
    A("hero", "i", 1, id + "-S", h.ko + " " + nm + "(" + g + ") 스프라이트 앞", "2:3", "sprite", d);
    A("hero", "i", 1, id + "-P", h.ko + " " + nm + " 초상", "1:1", "portrait", d, id + "-S");
    A("hero", "i", 1, id + "-T", h.ko + " " + nm + " 턴어라운드", "16:9", "turn", d, id + "-S");
    A("hero", "i", 1, id + "-X", h.ko + " " + nm + " 그림자 모습", "2:3", "shadowform", d, id + "-S");
    A("hero", "i", 2, id + "-B", h.ko + " " + nm + " 스프라이트 뒤", "2:3", "spriteB", d, id + "-S");
    A("hero", "i", 2, id + "-R", h.ko + " " + nm + " 리깅 파츠 시트", "16:9", "rig", d, id + "-S");
    A("hero", "i", 3, id + "-MINI", h.ko + " " + nm + " 피규어 원형 시트", "16:9", "mini", d, id + "-S");
    H_ACT.forEach(([ak, ako, pr, loop, txt]) => {
      const act = txt || h[ak];
      const s = "The " + EN[h.c] + " " + act + ". " + h.w;
      A("heromo", "v", pr, id + "-M-" + ak, h.ko + " " + nm + " · " + ako + " (앞)", "2:3", loop ? "charloop" : "char", s, id + "-S");
      A("heromo", "v", Math.min(3, pr + 1), id + "-MB-" + ak, h.ko + " " + nm + " · " + ako + " (뒤)", "2:3", loop ? "charloop" : "char", s, id + "-B");
    });
    A("heromo", "v", 2, id + "-M-xidle", h.ko + " " + nm + " · 그림자 모습 대기", "2:3", "charloop", "The living shadow form wavers in place, edges ripple like smoke, ink drips slowly from the hands and fades before touching the ground.", id + "-X");
    A("heromo", "v", 2, id + "-M-talk", h.ko + " " + nm + " · 초상 말하기", "1:1", "talk", "Dialogue portrait idle.", id + "-P");
  });
  A("hero", "i", 1, h.c + "-CARD", h.ko + " 직업 카드 그림", "2:3", "card", "class card art for the " + EN[h.c] + ": " + h.F[1].split(",").slice(1, 4).join(",") + ", shown in action in a dusk landscape");
});
A("hero", "i", 1, "LINEUP-F", "영웅 8명 키 비교 (여)", "16:9", "lineup", HEROES.map(h => h.F[1].split(",")[0] + " the " + EN[h.c]).join(", ") + ", eight lanternbearers of clearly different heights, builds and ages");
A("hero", "i", 1, "LINEUP-M", "영웅 8명 키 비교 (남)", "16:9", "lineup", HEROES.map(h => h.M[1].split(",")[0] + " the " + EN[h.c]).join(", ") + ", eight lanternbearers of clearly different heights, builds and ages");
