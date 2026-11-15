// 묻힌 태양 프롬프트북 — NPC, 적, 보스, 장면, 전투맵, 타일, 소품, 긴 버전
// ---------- NPC ----------
const NPCS = [
  // [id, prio, 이름, 설명, 말하는 초상 영상 여부]
  ["N-NIKO", 1, "니코 (에1)", "Niko, a thin 10-year-old boy from a mining village, ash-smudged face, too-big hand-me-down wool coat, fresh burn marks on both palms, frightened but stubborn eyes", 1],
  ["N-ELLA", 1, "엘라 (에1)", "Ella, a 6-year-old girl sick with cold blood, bluish lips, wrapped in a heavy patched blanket, pale skin, large dark eyes", 1],
  ["N-MAREN", 1, "마렌 (에1)", "Maren, a mother in her thirties, tired lined face, strong work-rough hands, hair tied in a faded indigo kerchief, a mended apron", 1],
  ["N-TORVAL", 2, "토르발 (에1, 기억)", "Torval, a broad-shouldered miner in his thirties, soot in the creases of his face, a cheerful gap-toothed grin, a leather miner's cap", 0],
  ["N-HAGEN", 1, "촌장 하겐 (에1)", "Hagen, a 52-year-old village chief, grey cropped beard, heavy dark wool coat with brass buttons and one button missing, stern guarded eyes, a man who has carried a secret for decades", 1],
  ["N-BEA", 1, "늙은 베아 (에1)", "Bea, an 80-year-old village midwife, tiny and bent, bony hands, cloudy sharp eyes, a shawl full of cat hair, several cats around her feet", 1],
  ["N-ODA", 1, "오다 (에2)", "Oda, a widow in her forties, hollow sleepless eyes, coils of hand-braided rope over one shoulder, a miner's knots on her belt, a pale oil lamp tied at the waist", 1],
  ["N-FELIX", 1, "펠릭스 (에2)", "Felix, a young man in his twenties acting as village chief, nervous and angry, sleeves rolled up, a cart of planks and stones behind him", 1],
  ["N-LINE", 1, "리네 (에2)", "Line, a thin 8-year-old girl who has lived four months underground, hair matted, dirty dress, clutching a nearly burnt-out warmstone, fierce and wary", 1],
  ["N-JAN", 2, "얀 (에2, 기억)", "Jan, a gentle tired father in his thirties, a miller's flour-dusted apron, a soft beard", 0],
  ["N-GULB", 2, "굴브 (에2)", "Gulb, a miller in his fifties, flour in his eyebrows, hunched with shame, red eyes", 1],
  ["N-BRAM", 2, "촌장 브람 (에2, 스밈 중)", "Bram, a stout village chief standing knee-deep in black water, half his face turning ash-grey, his eyes still human but unfocused, murmuring", 0],
  ["N-MOTHER", 1, "물 밑의 어머니 (에2)", "the Mother Below: the tall orphan shadow of a woman from three centuries ago standing on a rock wall in warm sunstone light, arms protectively curved, an old-fashioned dress outline", 0],
  ["N-OSKAR", 1, "오스카르 (에3)", "Oskar, a quiet funeral waxworker in his fifties, hands and forearms permanently coated in pale wax, a leather apron, grief-heavy eyes", 1],
  ["N-HILDE", 1, "힐데 (에3, 볕밀랍 속)", "Hilde, an old woman in her seventies standing with hands folded, sealed under a smooth layer of warm amber-coloured sunwax, eyes closed, peaceful face", 0],
  ["N-KAYA", 1, "카야 (에3)", "Kaya, a 16-year-old girl, wax-stained fingers, red-rimmed eyes, a braid her grandmother used to tie, a lantern in her hand", 1],
  ["N-LARS", 1, "등불 상인 라스 (반복)", "Lars, a merchant in his thirties, warm easy smile, clothes far too clean for the road, a neat cart of small shuttered lanterns, a dawn-sun sigil coin worn on a cord", 1],
  ["N-AGNETA", 1, "아그네타 (에4)", "Agneta, a 17-year-old girl, long sleeves tightly bound at the wrists with cloth, a borrowed smith's hammer, wind-tangled hair, furious wet eyes", 1],
  ["N-LISE", 2, "리세 (에4)", "Lise, a 20-year-old woman with a kind face, sleeves rolled up for work, a polishing cloth in hand", 1],
  ["N-HARALD", 1, "종지기 하랄 (에4)", "Harald, a bell keeper in his seventies, clean and frugal clothes, trembling hands, a gentle face hiding guilt", 1],
  ["N-THOMAS", 2, "토마스 (에4)", "Thomas, an 18-year-old lanky youth, uneasy, avoiding eye contact", 1],
  ["N-SEVRIN", 1, "서약 집행관 세브린 (반복)", "Sevrin, an oath warden in his forties, grey layered coat, close-cropped hair, a calm unreadable face, a lantern holding a fist-sized flawless sunstone casting hard light so that no shadow ever forms near him", 1],
  ["N-URSULA", 1, "우르술라 (에5)", "Ursula, a guild mine overseer in her forties, practical leather coat, a ledger under her arm, soot on her cheekbones, tired decency", 1],
  ["N-OIVIN", 1, "광부 반장 오이빈 (에5)", "Oivin, a mine foreman in his fifties, sitting exhausted, a faint gold crust on the back of one hand, eyes that have heard too much", 1],
  ["N-CHAINED", 2, "사슬 광부들 (에5)", "chained debt miners of the Sunstone Guild, iron ankle shackles stamped with numbers, thin and filthy, picks in hand", 0],
  ["N-EDRIC", 1, "영주 에드릭 (에6)", "Edric, a lord in his sixties, dignified and kind-looking, fine dark wine-coloured velvet, a face carved by thirty years of guilt", 1],
  ["N-IRENA", 1, "이레나 (에6)", "Irena, a castle maid in her forties, plain grey dress, a thick folded cloth in her hands hiding something, patient hard eyes", 1],
  ["N-ARON", 2, "서고지기 아론 (에6, 초상화)", "Aron, an archivist in his forties painted in an old small portrait, ink on his fingers, spectacles, earnest face", 0],
  ["N-EDDAU", 2, "영주의 막내딸 (에6)", "the lord's youngest daughter, about ten years old, clinging to the maid Irena's skirt", 0],
  ["N-ILDA", 1, "탑지기 일다 (에7, 변하기 전)", "Ilda, a beacon tower keeper in her sixties, eyes reddened from forty years of staring into sunstone light, a small bottle of tonic at her belt", 1],
  ["N-REFUGEE", 2, "피난민들 (에7)", "a crowd of refugees on a dark road, bundles, children, a handcart, faces lit pale", 0],
  ["N-KING", 1, "이름 없는 왕 / 길손 (반복)", "the Nameless Wanderer, an extremely tall gaunt figure in a long weathered hooded cloak, ancient face half hidden, a pale oil lamp in one hand, unnervingly still, no shadow anywhere near him", 1],
  ["N-MENTOR", 1, "늙은 등불잡이 게르트 (튜토리얼)", "Gerd, a veteran lanternbearer in his sixties, one eye clouded, many old scars, a battered shuttered lantern, patient teacher's face", 1],
  ["N-VILL", 2, "마을 사람들 (공용)", "a group of ordinary dusk-age villagers, patched wool clothes, pale faces, a mix of ages and builds", 0],
  ["N-WARDENS", 1, "집행관 무리 (공용)", "a squad of oath wardens in layered grey robes and iron half-masks, each carrying a hard-light lantern", 0],
  ["N-LAMPL", 2, "등지기 조합원 (도시)", "a city lamplighter with a long pole lighting a pale oil street lamp", 0],
  ["N-ASHFOLK", 2, "재의 사람들", "wandering Ash Folk travellers, ash-grey layered cloaks, knotted cords, wary eyes", 0],
  ["N-EIGHT", 2, "여덟 영웅 초상 (8장, 정오 시대)", "eight figures from the Noon age standing together in harsh sunlight: a shield-bearer, a chained giant, a hooded thief, a hunter, a scholar with seal drawings, a chain-binder, a bleeder with a bowl, a singer", 0],
  ["N-KINGY", 3, "젊은 왕 (정오 시대)", "the young king of the Noon age on a throne in blinding sunlight, his long shadow falling across the floor, a tired troubled face", 0]
];
NPCS.forEach(([id, p, ko, d, talk]) => {
  const flash = id === "N-EIGHT" || id === "N-KINGY";
  A("npc", "i", p, id + "-P", ko + " 초상", "1:1", flash ? "flash" : "portrait", d);
  A("npc", "i", p === 1 ? 2 : 3, id + "-F", ko + " 전신", "2:3", flash ? "flash" : "npc", d, id + "-P");
  if (talk) A("npc", "v", 2, id + "-TALK", ko + " 말하기 초상", "1:1", "talk", "Dialogue portrait idle.", id + "-P");
});

// ---------- 적 ----------
const ENEMIES = [
  ["E-SHD", 1, "고아 그림자 (볕빛 속, 벨 수 있음)", "an orphan shadow made solid by sunstone light: a man-shaped figure of ink-black liquid shadow and smoke, the faint outline of a long-dead villager in old-fashioned clothes, violet edges, a whispering mouth, one arm reaching hungrily"],
  ["E-SHH", 1, "고아 그림자 (보통 불빛, 구멍)", "an orphan shadow under ordinary light: a man-shaped hole in the air where the light simply stops, no surface detail at all, only its violet-tinged edges show the outline"],
  ["E-SHW", 2, "물 위의 고아 그림자", "an orphan shadow sliding flat across black water, a thin skin of frost cracking and forming in its wake"],
  ["E-HOL", 1, "빈 자 (마을 사람)", "a hollowed villager: emaciated, ash-grey skin, empty black eye sockets, ink dribbling from the mouth, still wearing everyday patched clothes, slack posture"],
  ["E-HOLM", 1, "빈 자 (광부)", "a hollowed miner swinging a pickaxe at nothing, ash-grey skin, empty eye sockets, leather miner's cap"],
  ["E-HOLB", 2, "빈 자 (두레박)", "a hollowed man hauling up an empty bucket on no rope, over and over, ash-grey skin, empty eyes"],
  ["E-HOLR", 2, "빈 자 (어르는 여자)", "a hollowed woman rocking empty arms as if holding a baby, flour-dusted apron, ash-grey skin, empty eyes"],
  ["E-DOLL", 1, "그림자 인형", "a life-size crude wax decoy doll of a person, cracked open, ink-black shadow oozing from the cracks, lurching"],
  ["E-DOLLM", 2, "녹아내리는 그림자 인형", "a wax decoy doll melting and sagging as it walks, shadows struggling inside the soft wax"],
  ["E-MOTH", 1, "해골나방 떼", "a swarm of large pale moths with skull-like patterns on their wings, gathering into a vague tall humanoid shape"],
  ["E-MOTH1", 2, "큰 해골나방", "a single pale moth the size of a dog, skull pattern on the wings, furry body, drawn toward light"],
  ["E-ASHW", 1, "재의 증인", "the burned shade of a person executed by fire three centuries ago, a charred silhouette of ink and drifting ash flakes, arms raised as if climbing"],
  ["E-WARDEN", 1, "서약 집행관 (적)", "a gaunt oath warden in heavy layered grey robes and an iron half-mask, a lantern holding a fist-sized flawless sunstone casting hard warm light, a short sword"],
  ["E-DAWN", 2, "새벽 결사 광신자", "a Dawn Society zealot in a dark hood with a crude dawn-sun sigil stitched on the chest, a cudgel and a cheap sunstone lamp"],
  ["E-GUILD", 2, "길드 감독관", "a Sunstone Guild overseer with a coiled whip and a ledger, thick leather coat, a brass guild badge"],
  ["E-GGUARD", 2, "길드 경비", "a Sunstone Guild guard with a spear and a padded coat, a brass guild badge"],
  ["E-PETR", 2, "굳어 가는 광부", "a miner half-turned to sunstone, a gold crust creeping up from one arm, stiff and staggering"],
  ["E-RATS", 2, "곡식 창고 쥐 떼", "a starving swarm of grey rats pouring over frozen grain sacks"],
  ["E-MOCK", 2, "흉내 내는 그림자", "an orphan shadow leaning from a wall with its mouth stretched open, mimicking a voice"],
  ["E-HOUND", 3, "그림자 사냥개", "a gaunt hound made of black smoke and exposed ribs, long jaws, two tiny pinpoint eyes"],
  ["E-WITCH", 3, "뿌리 마녀", "an old witch fused with gnarled tree roots, antlers of dead branches"],
  ["E-DROWN", 3, "늪의 익사자", "a bloated drowned man covered in reeds and leeches rising from black water"],
  ["E-RATK", 3, "쥐의 왕", "a rat king, a writhing knot of rats with tangled tails"],
  ["E-STAT", 3, "우는 석상", "a weathered stone statue of an ancient hero come alive, cracked face weeping black tar"],
  ["E-LEECH", 3, "거머리 기사", "an empty knight's armor filled with leeches spilling from the visor"],
  ["E-NOONS", 3, "정오 전쟁의 그림자 병사", "the shadow of a soldier from the Noon war, rusted armor outlined in ink, a broken spear"],
  ["E-HANG", 3, "목매단 자", "a hanged corpse still moving, a broken rope dragging from its neck, a small bell tied to its ankle"]
];
const E_ACT = [["idle", "대기", 1, true, "idle in place, subtle unsettling movement"], ["move", "이동", 2, true, "moves forward in place as a movement cycle"], ["atk", "공격", 1, false, "lunges forward to attack and recovers"], ["hit", "피격", 2, false, "recoils from a hit and recovers"], ["die", "소멸·쓰러짐", 2, false, "collapses and dissolves or falls apart, leaving nothing behind"]];
ENEMIES.forEach(([id, p, ko, d]) => {
  A("enemy", "i", p, id, ko, "2:3", "enemy", d);
  if (p < 3) A("enemy", "i", p + 1, id + "-B", ko + " (뒤)", "2:3", "spriteB", d, id);
  E_ACT.forEach(([ak, ako, pr, loop, txt]) => A("enemymo", "v", Math.min(3, p + pr), id + "-M-" + ak, ko + " · " + ako, "2:3", loop ? "charloop" : "char", "The creature " + txt + ". Its body keeps the same shape and size except where described.", id));
});

// ---------- 보스 ----------
const BOSSES = [
  ["B-TORVAL", 1, "토르발의 그림자 (에1)", "the orphan shadow of a drowned miner rising out of a black well: a huge dripping figure of black water and shadow with the outline of a pickaxe, water pouring off it"],
  ["B-KNOT", 1, "사슬에 엉킨 것 (에2)", "a colossal knot of rusted iron chains rising from black water, hundreds of shadows wedged between the links, hands and faces pressing outward"],
  ["B-WAXG", 1, "밀랍 거인 (에3)", "a towering giant of half-melted wax decoy dolls fused together, dozens of ink-black shadows struggling inside the translucent wax, wax dripping heavily"],
  ["B-ASHW", 1, "재의 증인들 (에4)", "a wave of hundreds of burned shades fused into one mass, climbing a stone bell tower like a black tide of reaching arms and ash"],
  ["B-HEART", 1, "광맥의 심장 (에5)", "a house-sized flawless sunstone crystal in a round cavern, pulsing with warm golden light, golden veins spreading through the rock walls, ceiling and floor"],
  ["B-LORDSH", 2, "영주의 그림자 (에6 중간)", "the living kin-shadow of an old lord cast on a candlelit stone wall, a regal outline, a cloak of ink, one hand open as if confessing"],
  ["B-ARON", 1, "아론의 그림자 (에6)", "the orphan shadow of a murdered archivist: a gaunt figure of ink whose mouth is sewn shut with dull old gold thread, broken chains on the wrists, loose pages of records swirling around it"],
  ["B-MOTHM", 1, "나방의 어미 (에7)", "an enormous moth with tattered pale wings, the gaunt face and torso of an old woman fused into its body, countless eye patterns on the wings, circling a sunstone brazier"],
  ["B-KINGSH", 1, "왕의 그림자 · 봉인의 문지기 (에8)", "the shadow of an ancient king at a sealed gate: a towering ink figure in the outline of a crowned man, eight broken sun-iron chains hanging from it, the same tall silhouette as the hooded wanderer"]
];
const SEALS = [["SHIELD", "방패"], ["CHAIN", "사슬"], ["UNSEEN", "보이지 않는 자"], ["HUNTER", "사냥꾼"], ["SEALW", "봉인술사"], ["BINDER", "묶는 자"], ["BLEEDER", "피 거두는 자"], ["SINGER", "노래하는 자"]];
SEALS.forEach(([k, ko]) => BOSSES.push(["B-SG-" + k, 3, "긴 버전 · " + ko + "의 봉인 수호자", "the guardian of the seal of the " + k.toLowerCase() + " (one of the Eight), a colossal shadow-being shaped by that hero's memory, sun-iron chains, ancient and grieving"]));
const B_ACT = [["idle", "대기", 1, true, "idle, breathing slowly with menace"], ["atk1", "공격 1", 2, false, "a heavy forward attack and recovery"], ["atk2", "공격 2", 2, false, "a sweeping attack to one side and recovery"], ["special", "특수", 2, false, "its signature special move, building up and releasing"], ["hit", "피격", 2, false, "staggers from a heavy blow and recovers"], ["defeat", "패배", 2, false, "collapses slowly and falls still or dissolves"]];
BOSSES.forEach(([id, p, ko, d]) => {
  A("boss", "i", p, id, ko, "1:1", "boss", d);
  A("boss", "i", Math.min(3, p + 1), id + "-T", ko + " 턴어라운드", "16:9", "turn", d, id);
  A("boss", "i", Math.min(3, p + 1), id + "-CARD", ko + " 보스 카드 그림", "2:3", "card", d);
  B_ACT.forEach(([ak, ako, pr, loop, txt]) => A("bossmo", "v", Math.min(3, p + pr - 1), id + "-M-" + ak, ko + " · " + ako, "1:1", loop ? "charloop" : "char", "The boss " + txt + ". Its body keeps the same shape, parts never detach unless described.", id));
});

// ---------- 장면 ----------
const SCENES = [
  // [id, prio, 이름, 설명, 배경 모션]
  ["S1-GATE", 1, "에1 · 잿골 입구", "the edge of a mining village at eternal dusk, a wooden stake by the road with a nailed bounty notice and charcoal writing beneath it, slag heaps and mine towers behind", "ash drifting slowly, the paper notice fluttering"],
  ["S1-BARN", 1, "에1 · 헛간의 소년", "inside a dark barn, a frightened boy hugging his knees on straw beside a tiny glowing sunstone chip; on the wooden wall behind him his own ink-black shadow sits in the same pose but its head is raised", "the sunstone pulses faintly, the wall shadow slowly lifts its head"],
  ["S1-HOUSE", 2, "에1 · 마렌의 집", "a cramped miner's cottage, a sick little girl under a heavy blanket by a pale hearth fire, a worn coat on a peg", "pale hearth flame flickers, the child's breath fogs"],
  ["S1-BEA", 2, "에1 · 베아의 문", "a crooked old cottage door opened a crack, a bony hand reaching out, many cats' eyes in the dark gap", "cats' tails twitch, the hand trembles"],
  ["S1-WELL", 1, "에1 · 검은 우물", "an old stone village well in a square, water black as ink, a face-like ripple far down, a brass button caught between stones", "the black water ripples slowly"],
  ["S1-SQUARE", 1, "에1 · 광장의 밤", "a village square at night, villagers with pale torches and buckets of oil heading toward a barn, dark shapes seeping from cracks in the ground", "torch flames flicker pale, dark shapes seep"],
  ["S2-MILL", 1, "에2 · 얼어붙은 물레", "a riverside village where the river froze solid overnight, a waterwheel stopped mid-turn with man-sized icicles, villagers queueing at a single well with empty buckets", "icicles drip once, breath fogs, the queue stands still"],
  ["S2-ODA", 2, "에2 · 오다의 방", "a child's untouched room kept for two years, small shoes, a wooden top, a medicine bottle by the bed, coils of rope on the floor", "dust motes drift in pale lamplight"],
  ["S2-CIST", 1, "에2 · 검은 저수지", "a vast underground cistern of stone pillars, waist-deep black water, a few hollowed villagers standing motionless with buckets, pale oil lamplight reaching only ten paces", "frost ripples spread on the water"],
  ["S2-LINE", 1, "에2 · 리네의 불빛", "a small dry rock island in a dark cistern, a thin girl hugging her knees beside a nearly burnt-out glowing warmstone, fish bones arranged neatly around her; on the rock wall two shadows: her own small one and a tall woman's shadow wrapping both arms around her", "the warmstone glow dims and recovers, the tall shadow's arms tighten"],
  ["S2-KNOT", 1, "에2 · 사슬이 깨어난다", "a colossal knot of rusted chains rising from the black water of a cistern, hundreds of shadows wedged between the links", "chains grind and rise, water streams off"],
  ["S3-VILL", 1, "에3 · 등잔이 켜진 초골", "a candle-makers' village with rows of pale candles in every window, but a few windows glowing warm gold, silhouettes of people arguing inside them", "pale candles flicker, the gold windows pulse"],
  ["S3-STAIR", 1, "에3 · 장례당 계단", "a descending crypt staircase lined with the dead sealed upright in smooth amber sunwax, hands folded, eyes closed", "very faint warm shimmer on the wax"],
  ["S3-SEVEN", 1, "에3 · 일곱의 방", "a small crypt room, seven people sealed upright in sunwax along the walls, a single sunstone lamp on the floor; behind an old woman in wax, her ink-black kin-shadow on the wall raises its head", "the wall shadow's mouth moves silently"],
  ["S3-DOLLS", 1, "에3 · 인형 거리", "a road leading out of a village lined with hundreds of crude life-size wax decoy dolls, cheap sunstone lamps placed among them, several dolls cracked and sagging", "wax drips, cracked dolls twitch"],
  ["S3-YARD", 2, "에3 · 인형 마당", "a fenced yard crowded with full wax decoy dolls, a wooden gate bulging outward", "the gate creaks outward"],
  ["S4-TOWER", 1, "에4 · 포위된 종탑", "a hilltop village with a tall stone bell tower, the square below ringed by a circle of hard warm light from oath warden lanterns, a girl's tiny figure at the top of the tower", "the warden lights stay steady, wind moves the girl's hair"],
  ["S4-HARALD", 2, "에4 · 종지기의 방", "a clean frugal bell keeper's room, a framed exemption decree on the wall, a teacup trembling on a saucer", "the tea surface trembles"],
  ["S4-AGNETA", 2, "에4 · 빈 방", "two sisters' room, two of everything, one untouched but dusted daily, drawings of a bell pinned to the wall", "pinned drawings stir"],
  ["S4-STAIRS", 1, "에4 · 종탑 계단", "a narrow spiral stair inside a bell tower, black burned shades reaching in through slit windows, a cut bell rope hanging", "the cut rope sways, black arms reach in"],
  ["S4-BELL", 1, "에4 · 종 아래", "the top of a bell tower, a huge dark red-black sun-iron bell hanging from an oak beam, a girl with bound sleeves raising a hammer, burned shades climbing over the parapet, an oath warden with a hard-light lantern", "dust trickles from the bell's engraved letters as it hums"],
  ["S5-MINE", 1, "에5 · 노래가 멈춘 광산", "the head of a deep mine on the rim of a great chasm, miners gathered at the shaft looking down at a strange gold glow rising from far below", "the gold glow pulses from below"],
  ["S5-DEEP", 1, "에5 · 7층의 끝", "the end of a new mine tunnel broken through into emptiness, eight exhausted miners sitting with their shadows huddled beside them in gold vein light, a scholar turned entirely to gold stone reaching forward", "vein light pulses like a heartbeat"],
  ["S5-SWALLOW", 1, "에5 · 삼켜진 마을", "a whole village buried inside the rock, houses, a well, washing lines and people all turned to dull unlit sunstone in the middle of an ordinary evening, dust everywhere", "dust motes fall slowly"],
  ["S5-HEART", 1, "에5 · 광맥의 심장", "a round cavern with a house-sized flawless sunstone heart pulsing warm gold, veins of gold spreading through every wall, nothing in the room casts a shadow", "the heart beats, light swells and recedes"],
  ["S6-CASTLE", 1, "에6 · 창백한 성", "a great grey castle lit only by thousands of pale candles and oil lamps, cold white light in every window, no gold anywhere", "candle flames flicker pale"],
  ["S6-CORR", 1, "에6 · 긴 복도", "a long candlelit castle corridor, an old lord and two attendants; from behind a pillar a thin line of gold light leaks, and on the wall three ink shadows have formed", "the gold line flickers, the shadows' mouths move"],
  ["S6-ARCH", 2, "에6 · 서고", "a dusty castle archive, shelves of ledgers, a hidden bundle of an archivist's papers", "dust drifts in lamplight"],
  ["S6-CELLAR", 1, "에6 · 지하 벽", "a castle cellar where one wall has been bricked over more recently than the rest, chains bolted into the stone, a sewn-mouthed shadow faintly visible on the bricks", "the chains tremble"],
  ["S6-HALL", 1, "에6 · 재판의 대전", "a great hall with a long table and an empty high seat, envoys, a maid reading from old papers, a lord standing beside his own shadow", "candle flames lean"],
  ["S7-ROAD", 1, "에7 · 등탑길", "a long dark road across moorland punctuated by tall beacon towers each crowned with hard golden sunstone light falling straight down under iron skirts", "beacons pulse, mist rolls"],
  ["S7-SWARM", 1, "에7 · 덮인 탑", "a beacon tower completely covered by millions of pale moths, its light smothered, refugees huddled at its base", "the moths crawl and flutter"],
  ["S7-CAMP", 2, "에7 · 피난민 진영", "a refugee camp of handcarts and bundles at the foot of a beacon tower, oath wardens pushing people into a line", "people shift, children cling"],
  ["S7-TOP", 1, "에7 · 탑 꼭대기", "the round top of a beacon tower, a great sunstone brazier half-eaten of light, a giant moth with an old woman's face wrapped around it", "the moth wings slowly beat"],
  ["S8-CHASM", 1, "에8 · 대협곡", "the edge of a vast chasm at the centre of a continent, ruins of an ancient fortress built over it, faint gold light leaking from cracks far below, three armies approaching", "gold light flickers from below, banners move"],
  ["S8-PILLARS", 1, "에8 · 여덟 기둥의 회랑", "a colonnade of eight carved pillars each bearing a different emblem (shield, chain, hood, bow, seal, binding, bowl, mouth singing), some pillars faintly lit", "pillars light one by one"],
  ["S8-GATE", 1, "에8 · 첫 번째 봉인", "a colossal stone gate wrapped in dark red-black sun-iron chains, gold light seeping through cracks, a slow breath felt through the stone", "the light through the cracks breathes"],
  ["S0-TITLE", 1, "타이틀", "an enormous dim golden sun buried deep beneath cracked earth, bound by colossal chains, golden light seeping up through fissures toward a lone shuttered lantern on the surface at dusk", "light seeps up through the cracks, the lantern sways"],
  ["S0-MENU", 1, "메인 메뉴", "a small camp of lanternbearers at dusk around a pale fire, shuttered lanterns at their feet, a vast dusk sky", "the pale fire flickers, a cloak moves in wind"],
  ["S0-MAP", 1, "세계 지도 화면 배경", "a painted map of a dark continent at eternal dusk on old vellum, a great chasm at the centre, mining towns around it, beacon roads, eight faint seal marks", "map ink shimmers faintly"],
  ["S0-CAMP", 2, "야영 화면", "a resting party's camp in a ruined stone shelter, bedrolls, a pale fire, lanterns shuttered", "the fire flickers"],
  ["S0-LOAD1", 2, "로딩 · 그림자의 귀환", "countless ink-black shadows climbing up out of a crack in the ground toward a distant village", ""],
  ["S0-LOAD2", 2, "로딩 · 긴 저녁", "a lone traveller with a shuttered lantern on a road under an endless dusk sky, no shadow on the ground", ""],
  ["S0-LOAD3", 2, "로딩 · 볕밭", "a field of pale white wheat growing in dusk light, sunmeal buried in the furrows, farmers in patched clothes", ""],
  ["S0-LOAD4", 2, "로딩 · 등지기", "a city street of pale oil lamps being lit one by one by lamplighters", ""]
];
SCENES.forEach(([id, p, ko, d, amb]) => {
  A("scene", "i", p, id, ko, "9:16", id.startsWith("S0-TITLE") ? "key" : "scene", d);
  if (amb) A("ambient", "v", p === 1 ? 2 : 3, id + "-AMB", ko + " · 배경 모션", "9:16", "amb", "Animate subtly: " + amb + ".", id);
});

// ---------- 회상(정오 시대) ----------
[["F-BURN", 1, "열세 해의 불", "a town square in the Noon age, crowds and the long hard shadows of everyone speaking aloud as mouths on the ground, smoke of burning in the distance"],
 ["F-DRAG", 1, "해를 끌어내리다", "eight figures straining at colossal chains wrapped around a blazing descending sun, the earth splitting open into a chasm beneath it"],
 ["F-FALL", 1, "그림자가 떨어지다", "at the moment the sun sinks into the earth, every shadow in a crowd peels from the ground and falls into the chasm like black rain"],
 ["F-KING", 2, "왕의 부탁", "a king kneeling alone before the sun on a mountaintop, speaking to it, his shadow stretched behind him"]].forEach(([id, p, ko, d]) => A("scene", "i", p, id, "회상 · " + ko, "9:16", "flash", d));

// ---------- 전투맵 ----------
[["M1-SQ", 1, "에1 광장", "a mining village square with a barn, a well, carts, crates, low stone walls and cracks in the ground"],
 ["M1-WELL", 1, "에1 우물가", "the area around an old black-water well, cobbles, a shed, a gnarled dead tree"],
 ["M2-CIST", 1, "에2 저수지 상층", "an underground cistern of stone pillars with shallow and deep black water areas, a fallen rope from above"],
 ["M2-ISLE", 1, "에2 리네의 섬과 사슬", "a rock island in a cistern, deep water around it, a giant chain knot emerging on one side"],
 ["M3-DOLL", 1, "에3 인형 거리", "a narrow road lined with wax decoy dolls, puddles of melted wax, a toppled lamp cart"],
 ["M3-FSQ", 1, "에3 장례당 앞 광장", "a small square before a crypt entrance, pooled wax, broken dolls, stairs down"],
 ["M4-CAMP", 2, "에4 집행관 진영", "a hilltop square ringed with warden lanterns, a prison wagon, a tower base door"],
 ["M4-STAIR", 1, "에4 종탑 계단", "a spiral stair in a tower shown as stacked isometric landings with slit windows"],
 ["M4-TOP", 1, "에4 종탑 꼭대기", "the top platform of a bell tower, the bell hanging in the middle, a broken parapet, the hatch"],
 ["M5-TUN", 1, "에5 6~7층 갱도", "branching mine tunnels, rails, carts, pulsing gold veins in the walls, a deep pit"],
 ["M5-VILL", 1, "에5 삼켜진 마을 거리", "a village street inside rock, petrified people as obstacles, a well, a cracked plaza"],
 ["M5-HEART", 1, "에5 심장의 방", "a round cavern with a giant sunstone heart in the middle and gold veins across the floor"],
 ["M6-CORR", 1, "에6 긴 복도", "a long castle corridor with pillars, side doors and candle stands"],
 ["M6-CELL", 1, "에6 지하실", "a castle cellar with barrels, chains in the wall and a bricked section"],
 ["M6-HALL", 1, "에6 대전", "a great hall with a long table, a raised dais and side doors"],
 ["M7-CAMP", 1, "에7 피난민 진영", "a refugee camp at a tower base with handcarts, tents and a warden line"],
 ["M7-STAIR", 1, "에7 탑 나선 계단", "the interior of a beacon tower, stacked landings covered in moths"],
 ["M7-TOP", 1, "에7 등탑 꼭대기", "the round top of a beacon tower with a great brazier in the centre and broken parapets"],
 ["M8-OUT", 1, "에8 요새 외곽", "ruined fortress outskirts at a chasm edge, two battle lines, cracks leaking gold"],
 ["M8-COL", 1, "에8 여덟 기둥 회랑", "a colonnade of eight pillars over a ruined floor"],
 ["M8-GATE", 1, "에8 봉인의 문 앞", "a vast cavern floor before a giant chained gate, chasms on both sides, stone bridges"],
 ["M0-TUT", 1, "튜토리얼 맵", "a small quiet village edge with a fence, a well, a shed and a crack in the ground"]].forEach(([id, p, ko, d]) => A("map", "i", p, id, "전투맵 · " + ko, "9:16", "map", d));

// ---------- 타일 / 벽 ----------
["cracked flagstone", "village cobbles", "ashy dirt with dead leaves", "frozen mud with frost", "thin snow over dirt", "shallow black water", "deep black water", "cracked ice", "old wooden planks", "wax-coated stone floor", "pool of melted wax", "dark mine rock with sleeping sunstone veins", "mine rock with woken pulsing gold veins", "ground turned to dull sunstone", "castle floor with a worn wine-red runner", "dead grass", "bone-strewn grave soil", "chasm edge rock", "stone bridge", "moth-covered stone", "beacon tower top stone", "crypt floor", "barn straw floor", "rails on rock"].forEach((d, i) => A("tile", "i", i < 14 ? 1 : 2, "T" + String(i + 1).padStart(2, "0"), "타일 · " + d, "1:1", "tile", d));
["stone wall section", "wooden fence", "crypt wall with wax figures", "mine tunnel wall with timber props", "castle wall with candle sconce", "ruined wall", "cliff edge", "stairs going down", "stairs going up", "door frame with open door", "well (blocking object)", "pillar"].forEach((d, i) => A("tile", "i", i < 8 ? 1 : 2, "W" + String(i + 1).padStart(2, "0"), "벽·구조물 · " + d, "1:1", "wall", d));

// ---------- 소품 ----------
[["shuttered iron sunstone lantern, shutter closed", 1, "등불 (닫힘)"], ["the same lantern with the shutter open, warm gold light", 1, "등불 (열림)"], ["pale oil lamp with cold white flame", 1, "기름등"], ["iron brazier with a pale fire", 1, "화로"], ["iron-bound wooden chest, closed", 1, "상자"], ["the same chest open, empty inside", 1, "상자 (열림)"], ["heavy wooden door with iron studs in a stone arch", 1, "철문"], ["old wooden coffin, lid ajar", 2, "관"], ["pile of bones with a rusted sword", 2, "뼈 무더기"], ["cluster of pale melted candles", 1, "양초 무리"], ["rusty open bear trap", 1, "덫"], ["leather roll of glass vials", 2, "약병 꾸러미"], ["hanging iron gibbet cage", 2, "철창"], ["old stone well with rope and bucket, black water", 1, "우물"], ["barricade of spikes and broken carts", 1, "바리케이드"], ["chunk of dull sleeping sunstone ore", 1, "잠든 볕돌 원석"], ["chunk of woken sunstone, glowing", 1, "깬 볕돌 원석"], ["life-size wax decoy doll standing still", 1, "그림자 인형"], ["a person sealed upright in amber sunwax", 1, "볕밀랍 속 사람"], ["vat of molten sunwax on a fire", 2, "밀랍 가마"], ["mine cart on rails", 1, "광차"], ["pickaxes and shovels leaning together", 2, "곡괭이"], ["coil of rusted chains", 1, "사슬 더미"], ["iron shackles stamped with numbers", 2, "족쇄"], ["roadside stake with a nailed notice", 1, "현상금 말뚝"], ["tilted stone grave markers", 2, "묘석"], ["frozen waterwheel", 2, "언 물레방아"], ["wooden bucket", 2, "두레박"], ["thick ledger book", 2, "장부"], ["coil of hand-braided rope", 2, "밧줄"], ["barrels and crates", 1, "통과 상자"], ["handcart with bundles", 2, "손수레"], ["hay bales", 2, "건초"], ["bedroll by a pale fire", 2, "잠자리"], ["oath warden banner with a seal sigil", 2, "서약회 깃발"], ["dawn-sun sigil coin", 2, "새벽 동전"], ["brass guild stamp", 3, "길드 도장"], ["beacon tower iron skirt with sunstone", 1, "등탑 머리"], ["carved standing stone wrapped in chains", 1, "봉인석"], ["a villager turned to dull sunstone", 1, "볕돌 석상"], ["loaf of pale white wheat bread", 2, "흰 밀 빵"], ["sun-iron bell on an oak beam", 1, "볕쇠 종"], ["prison wagon without windows", 2, "호송 마차"], ["wooden toy horse", 3, "나무 말"], ["wooden spinning top", 3, "팽이"], ["hide frame drum", 3, "북"], ["scholar's desk with notebooks", 2, "학자의 책상"], ["candle stand with many pale candles", 1, "촛대"], ["fallen pillar", 2, "무너진 기둥"], ["crack in the ground leaking darkness", 1, "갈라진 땅"]].forEach(([d, p, ko], i) => A("prop", "i", p, "O" + String(i + 1).padStart(2, "0"), "소품 · " + ko, "1:1", "prop", d));
[["O05", "상자 열림", "the chest lid lifts open slowly"], ["O07", "문 열림", "the door swings open inward"], ["O02", "등갓 빛 깜박임", "the gold light inside the lantern pulses gently"], ["O04", "화로 불", "the pale flame flickers"], ["O14", "우물 물결", "the black water surface ripples"], ["O42", "종 흔들림", "the bell trembles and hums, dust falling from the engraving"], ["O17", "볕돌 맥박", "the sunstone pulses like a heartbeat"], ["O18", "인형 금 가기", "cracks spread across the wax doll and black ink seeps out"], ["O50", "땅 틈", "darkness seeps up from the crack"]].forEach(([r, ko, s]) => A("propmo", "v", 2, r + "-M", "소품 모션 · " + ko, "1:1", "fxloop", "Animate: " + s + ". Plain flat mid-grey background stays unchanged, static camera.", r));

// ---------- 긴 버전 장치 ----------
[["L-SEALS", "여덟 봉인 (각각)", "eight different colossal seal gates each themed to one of the Eight: a shield wall, a gate of chains, a door that cannot be seen directly, a hunter's trap gate, a gate of carved seal diagrams, a gate of binding knots, a gate of hardened gold blood, a gate shaped like an open singing mouth"],
 ["L-LAYERS", "일곱 겹의 어둠 (하강 층)", "seven stacked underground layers descending toward a buried sun, each darker and stranger, cut-away view"],
 ["L-SUNROOM", "묻힌 해의 방", "a cavern beyond imagination where an enormous sleeping sun lies chained, dim and breathing, its light pressing through closed eyelid-like crust"],
 ["L-SEALHOUSE", "봉인소 셋째 방", "a cold stone room in a sealhouse where chainmarked prisoners lie on cots as their blood drains into channels leading to a seal"],
 ["L-OATHCITY", "서약회의 도시", "a severe grey city of the Oath of Seals, towers crowned with hard sunstone light, wardens everywhere"],
 ["L-LAMPCITY", "등지기의 도시", "a sprawling trade city lit by thousands of pale oil street lamps, lamplighters on ladders"],
 ["L-DAWN", "새벽 결사의 은신처", "a hidden cellar meeting of the Dawn Society around a single cheap sunstone lamp, everyone's shadow on the walls listening"],
 ["L-ASH", "재의 사람들 야영지", "a caravan of the Ash Folk camped in total dusk without sunstone, knotted cords hanging from wagons"],
 ["L-GUILD", "볕돌 길드 본청", "the hall of the Sunstone Guild, scales weighing sunstone by size and veins, chained porters"],
 ["L-PALACE", "왕의 옛 궁전", "the ruined palace of the Noon age king, empty throne, scorch marks where the sun once shone through the roof"],
 ["L-NOONRUIN", "정오 글자의 유적", "ancient ruins carved with Noon script that no one can read, harsh old sun-bleached stone"],
 ["L-STIG", "성흔판 (후반 성장)", "an ornate board of interlocking hexagonal sockets carved from sun-iron for late-game character growth"],
 ["L-RELICS", "여덟의 유품 (8개)", "eight legendary relics of the Eight laid out: a dented shield, a link of sun-iron chain, a hood, a bow, a seal stamp, a binding cord, a bowl crusted with gold, a bone flute"]].forEach(([id, ko, d]) => A("long", "i", 3, id, "긴 버전 · " + ko, "9:16", "scene", d));
const JOBS = [["KN", "수호기사", "흑기사", "warden knight", "dark knight"], ["BZ", "전쟁군주", "처형자", "warlord", "executioner"], ["RG", "무법자", "암살자", "outlaw", "assassin"], ["HT", "저격수", "야수조련사", "marksman", "beastmaster"], ["MG", "화염술사", "결계술사", "pyromancer", "wardcaster"], ["NC", "저주술사", "망자군주", "hexer", "lord of the dead"], ["AL", "치유사", "독술사", "healer", "poisoner"], ["SH", "정령술사", "전쟁주술사", "spirit caller", "war shaman"]];
JOBS.forEach(([c, a, b, ae, be]) => ["F", "M"].forEach(sx => [[a, ae, "a light-path evolution of the outfit, cleaner, more protective, small sunstone fittings"], [b, be, "a shadow-path evolution of the outfit, darker, ink-stained, harsher silhouette"]].forEach(([jk, je, jd], j) => A("long", "i", 3, c + "-" + sx + "-J" + (j + 1), "2차 전직 · " + jk + " (" + (sx === "F" ? "여" : "남") + ")", "2:3", "sprite", "the same character as the reference, now a " + je + ": " + jd, c + "-" + sx + "-S"))));
