const ocarinas = [
    {
        id: 10023, make: "Pre-Columbian", date: "Pre-1500 AD", country: "Costa Rica", material: "Ceramic",
        description: `This pre-Columbian ${
            '<span class="tooltip">composite zoomorph <span class="tooltiptext">fusion of two animal forms</span> </span>'
        } of a fox and a turtle, like the little bird (${'<a href="#">#10028</a>'}), is around 2,000 years old and comes from the Nicoya peninsula on the Pacific coast of Costa Rica, from the Catalina phase of the Chorotega culture. Both vessel flutes have 4 equal-size finger holes offering five different fingering combinations and, this case, a range of just over a 5th, from D flat to A. Both are exquisitely made to produce a wonderfully pure sound. ${'<br><br>'} Players 2,000 years ago are unlikely to have played tunes as we would, but probably ${
            '<span class="tooltip">glissandoed <span class="tooltiptext">continuously slid between two notes</span> </span>'
        } and flutter-tongued to bring their creations to life, making them sing and purr like the creatures they depict.`,
        size: "68 x 38 x 50; 59 gm.",
        images: ["assets/images/general-img-square.png", "assets/images/general-img-square.png", "assets/images/general-img-square.png"]
    },
    {
        id: 10028, make: "Pre-Columbian", date: "Pre-1500 AD", country: "Costa Rica", material: "Ceramic",
        description: `This little bird is around 2,000 years old with a fippled mouthpiece in the tail, suspension hole through the neck, and 4 equal-size finger holes. It has two feet and two wings, and is beautifully patterned in a style known as “Marbella”, with incised lines, small punched holes, and purple and white colouring. Notice that the head is adorned with ear-spools and crown, of the type ceremonially worn in pre-Columbian society. It comes from the Nicoya peninsula on the Pacific coast of Costa Rica and is from the Catalina phase of the Chorotega culture. The four holes offer a range of just over a 6th, from G flat to E.`,
        size: "85 x 57 x 80; 92 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10250, make: "Hind", date: "1960-1999", country: "USA", material: "Wood",
        description: `Charlie Hind made this Alto “A” wooden ocarina in 1999 with English 4-hole fingering and 2 thumb holes. Made in American Walnut, its 4-part assembly consists of a flat base and flat 2-part top, with wrap-round side wall. It has a gentle sound.`,
        size: "118 x 43 x 35 mm; 63 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10716, make: "Gretsch", date: "1920-1959", country: "UK", material: "Plastic",
        description: `The Soprano G Gretsch ocarina is one of 3 sizes made by Gretsch from 1939 onwards and dispatched to “Men in the Service” during WWII. Each ocarina came complete with box, music & instructions. Publishers presented some music with numbers that matched those on the ocarina. The pink swirling pattern is typical of manufacture using end-of-day plastic. Seven rimmed holes on top and one underneath are numbered left to right “1, 2, 3, 4, 5, 6, 7” and “LT” (left thumb). Two holes remain uncut for the left little finger “LL” and right thumb “RT”. The mouthpiece is marked “GRETSCH G OCARINA” on top and “MADE IN U.S.A.” underneath, with “PATENT NUMBERS 2145605 2195115” between the thumb holes.`,
        size: "113 x 56 x 34 mm; 26 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10752, make: "Freyer", date: "1853-1919", country: "Germany", material: "Ceramic",
        description: `This ocarina is stamped 6C MEISSEN on the mouthpiece which indicates it was probably made by Freyer & Co between 1890 and 1910. Porcelain ocarinas were never made at the original Meissen factory, although the hand-painted blue onion-pattern design on translucent white background imitates the traditional Meissen style. This is the only ocarina in a range of at least ten sizes that has both tuning slide and keys. Catalogue lists show one key as standard rather than two: this is a rare “deluxe” model.`,
        size: "184 x 77 x 44 mm; 244 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10768, make: "Gretsch", date: "1920-1959", country: "USA", material: "Plastic",
        description: `This grey Soprano G is subtly different to some other Gretsch ocarinas in the Liggins collection. Holes labelled “LL” (left little finger) & “RT” (right thumb) on other ocarinas are here numbered “9” & “10”. They may have been named & moulded afresh to match number-music published in 1943. Holes have raised rims. Rough edges to these holes suggest they may have been drilled by hand, rather than formed in the moulding process. The seven holes on top and one underneath are numbered left to right “1, 2, 3, 4, 5, 6, 7” and “8” (left thumb). Two holes remain uncut for the left little finger “9” and right thumb “10”. The mouthpiece is marked “G OCARINA” on top and “MADE IN U.S.A.” underneath, with “PATENT NUMBERS 2145605 2195115” between the thumb holes.`,
        size: "113 x 56 x 34 mm; 26 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10825, make: "Indigenous", date: "1920-1959", country: "Papua New Guinea", material: "Other",
        description: `This carved coconut is a 2-hole vessel flute courting whistle collected in the Sepik River region of Papua New Guinea during the 1950s. The hole at one end is designed to blow across, and the finger hole is used to modulate the sound. The intricate carvings had a significance for the maker that is lost today. However, when viewed from the side, the finger hole can look like an open mouth with the carved eyes of a face above.`,
        size: "134 x 80 x 80 mm; 158 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10907, make: "Langley", date: "2000-today", country: "UK", material: "Ceramic",
        description: `John Langley made this Alto Duet for us in the year 2000, as part of a special set of Langley ocarinas to mark the millennium. With two ocarinas in a single outer body, each chamber has an adapted English 4-hole fingering with three finger holes on top and one thumb hole underneath. The chambers are separated by an internal wall and tuned identically in C for unison and harmony playing. The underside of this double ocarina is hand scripted "Langley Alto Duet 2000" beneath an aquamarine glaze. This is one of a family of four duet ocarinas: Soprano G, Alto C, Tenor G and Bass C. The full range was completed in 1991 after 20 years of experiment and testing.`,
        size: "114 x 90 x 58 mm; 259 gm",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10966, make: "Mezzetti", date: "1853-1919", country: "France", material: "Ceramic",
        description: `Ercole Mezzetti made ocarinas in Paris between 1878 & 1912. Finger holes on Mezzetti ocarinas are not always named but, on this model, each hole is labelled with a stamped number, letter, and tonic sol fa name, starting at “1.D”, “RE” at the right end. On Mezzetti ocarinas, the right little finger hole is uniquely split into two. Patented in 1878 by Mezzetti's brother Alberto, the two holes are recessed for the little finger to naturally roll over and cover one or both, to play two distinct semitones as well as a full tone. The patented tuning slide on this ocarina is found on most, but not all, Mezzetti ocarinas. Two lines of text are stamped within a decorative rectangular frame: E.MEZZETTI. Paris FABI BREVETÉ S.D.G.D. The mouthpiece is stamped on top with the Mezzetti logo. This logo and the lacquered terracotta finish are typical of most Mezzetti ocarinas. This Alto “C6” was the most popular in an extensive range.`,
        size: "174 x 85 x 40 mm; 170 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 10989, make: "Mathieu", date: "1853-1919", country: "France", material: "Metal",
        description: `During the 1880s, the company Ch. Mathieu, Paris, specialised in manufacturing many types of nickel-plated cast metal flutes. In 1891, they patented a metal ocarina and these sold internationally for over 40 years. This model 1C is one of seven: 0D, 1C, 2A, 3F, 4D, 5C & 6A. The complete range in our collection includes some sets in presentation cases. Markings on all sizes are: raised numbers by each hole, 1 to 7 on top (right to left), 9 (left little finger), 8 & 10 (thumbs); opposite each hole number, tonic sol fa names (DO, RE, MI...); on the rounded end, MODELE DEPOSÉ; on top of the mouthpiece, CH.MATHIEU PARIS; and under the mouthpiece, the model number, which in this case is “1”. MADE IN FRANCE is stamped around the widest circumference of this model between holes 6 and 7.`,
        size: "110 x 40 x 20 mm; 75 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 11017, make: "Gretsch", date: "1920-1959", country: "USA", material: "Plastic",
        description: `When production of European ocarinas ceased at the outbreak of WWII, “The Fred. Gretsch Mfg Co., Brooklyn, N.Y.” patented plastic ocarinas (1939/1940) for manufacture in the USA. This “American Broadkaster” Alto C is made of end-of-day green plastic with distinctive patterns of swirling colour. It is the largest of 3 boxed models: Alto C (No.106), Soprano G (No.103) and Soprano C (No.101). Seven rimmed holes on top and one underneath are numbered left to right “1, 2, 3, 4, 5, 6, 7” and “LT” (left thumb). Two holes remain uncut for the left little finger “LL” and right thumb “RT”. The mouthpiece is marked “GRETSCH ALTO C OCARINA” on top and “MADE IN U.S.A.” underneath, with “PATENT NUMBERS 2145605 2195992” between the thumb holes.`,
        size: "140 x 70 x 28 mm; 51 gm.",
        images: ["assets/images/general-img-square.png"]
    },
    {
        id: 11020, make: "Gretsch", date: "1920-1959", country: "USA", material: "Plastic",
        description: `The “American Broadkaster No. 101 Soprano in Key of C” is the highest pitch Gretsch ocarina - one of 3 sizes made from 1939 onwards. The Alto C came first, followed by a Soprano G and this smaller Soprano C. Sets of Gretsch ocarinas with music books were distributed to American troops from 1943 onwards. Seven rimmed holes on top and one underneath are numbered left to right “1, 2, 3, 4, 5, 6, 7” and “8” (left thumb). Two holes remain uncut for the left little finger “9” and right thumb “10”. The mouthpiece is marked “C OCARINA” on top with no further marks on the underside.`,
        size: "95 x 50 x 19 mm; 20 gm.",
        images: ["assets/images/general-img-square.png"]
    },
];


export default ocarinas;
