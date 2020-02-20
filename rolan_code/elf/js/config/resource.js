//
//	resource.js
//
//	Copyright 2016 Roland Corporation. All rights reserved.
//

function Resource() {

	var _ = [

		{ text:"Label, Button, Latch/Toggle, Check/Radio, Group/Menu, Knob, Slider, Dial, Bar, Spinner, Select box, Select list, Select panel, Text input" },
		{ text: "NORMAL, HOLD, KEY-OFF-NORMAL, KEY-OFF-DECAY" },
		{ text: "MONO, POLY" },
		{ text: "A, B, C, D" },
		{ text: "1, 2, 3, 4, 5, 6, 7, 8" },
		{ text: "WRITE, COPY, INITIALIZE, SAVE" },

		{ text: "OFF, 1 - 127" },
		{ text: "OFF, 1 - 50, OFF, 1 - 50" },
		{ text: "C-1 - G9" },
		{ text: "L64 - 63R" },
		{ text: "-100, -50, 0, +50, +100" },
		{ text: "OFF, CC01 - CC31, CC33 - CC95, BEND-UP, BEND-DOWN, AFT, NOTE, OCT-UP, OCT-DOWN, START/STOP, TAP-TEMPO, PTN-SW, PTN-ACCNT, PTN-SHFFL" },

		{ text: "OFF, ON", icon:"./images/color5.png, ./images/color2.png" },
		{ text: "A, B, C, D", icon: "./images/color1.png, ./images/color2.png, ./images/color3.png, ./images/color4.png" },
		{ icon:"./images/img1.png, ./images/img2.png, ./images/img3.png, ./images/img4.png" },

		{ text: "EDITOR, LIBRARIAN, TUNER, SYSTEM", icon: "./images/color1.png, ./images/color2.png, ./images/color3.png, ./images/color4.png" },

	];

	(function() {

		for (var n = 0, max = _.length; n < max; n++) {

			if (_[n].text !== undefined) {

				_[n].text = _[n].text.replace(/1 - 50/g,
					'  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' + 
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50'
				); 

				_[n].text = _[n].text.replace(/1 - 127/g,
					'  1,   2,   3,   4,   5,   6,   7,   8,   9,  10,' +
					' 11,  12,  13,  14,  15,  16,  17,  18,  19,  20,' +
					' 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,' +
					' 31,  32,  33,  34,  35,  36,  37,  38,  39,  40,' + 
					' 41,  42,  43,  44,  45,  46,  47,  48,  49,  50,' + 
					' 51,  52,  53,  54,  55,  56,  57,  58,  59,  60,' + 
					' 61,  62,  63,  64,  65,  66,  67,  68,  69,  70,' + 
					' 71,  72,  73,  74,  75,  76,  77,  78,  79,  80,' + 
					' 81,  82,  83,  84,  85,  86,  87,  88,  89,  90,' + 
					' 91,  92,  93,  94,  95,  96,  97,  98,  99, 100,' + 
					'101, 102, 103, 104, 105, 106, 107, 108, 109, 110,' + 
					'111, 112, 113, 114, 115, 116, 117, 118, 119, 120,' + 
					'121, 122, 123, 124, 125, 126, 127'
				); 

				_[n].text = _[n].text.replace(/C-1 - G9/g,
					'C -, C#-, D -, Eb-, E -, F -, F#-, G -, G#-, A -, Bb-, B -,' +
					'C 0, C#0, D 0, Eb0, E 0, F 0, F#0, G 0, G#0, A 0, Bb0, B 0,' +
					'C 1, C#1, D 1, Eb1, E 1, F 1, F#1, G 1, G#1, A 1, Bb1, B 1,' +
					'C 2, C#2, D 2, Eb2, E 2, F 2, F#2, G 2, G#2, A 2, Bb2, B 2,' +
					'C 3, C#3, D 3, Eb3, E 3, F 3, F#3, G 3, G#3, A 3, Bb3, B 3,' +
					'C 4, C#4, D 4, Eb4, E 4, F 4, F#4, G 4, G#4, A 4, Bb4, B 4,' +
					'C 5, C#5, D 5, Eb5, E 5, F 5, F#5, G 5, G#5, A 5, Bb5, B 5,' +
					'C 6, C#6, D 6, Eb6, E 6, F 6, F#6, G 6, G#6, A 6, Bb6, B 6,' +
					'C 7, C#7, D 7, Eb7, E 7, F 7, F#7, G 7, G#7, A 7, Bb7, B 7,' +
					'C 8, C#8, D 8, Eb8, E 8, F 8, F#8, G 8, G#8, A 8, Bb8, B 8,' +
					'C 9, C#9, D 9, Eb9, E 9, F 9, F#9, G 9'
				); 

				_[n].text = _[n].text.replace(/CC01 - CC31/g,
					'CC01, CC02, CC03, CC04, CC05, CC06, CC07, CC08, CC09, CC10, CC11, CC12,' +
					'CC13, CC14, CC15, CC16, CC17, CC18, CC19, CC20, CC21, CC22, CC23, CC24,' +
					'CC25, CC26, CC27, CC28, CC29, CC30, CC31'
				); 

				_[n].text = _[n].text.replace(/CC33 - CC95/g,
					'CC33, CC34, CC35, CC36, CC37, CC38, CC39, CC40, CC41, CC42, CC43, CC44,' +
					'CC45, CC46, CC47, CC48, CC49, CC50, CC51, CC52, CC53, CC54, CC55, CC56,' +
					'CC57, CC58, CC59, CC60, CC61, CC62, CC63, CC64, CC65, CC66, CC67, CC68,' + 
					'CC69, CC70, CC71, CC72, CC73, CC74, CC75, CC76, CC77, CC78, CC79, CC80,' +
					'CC81, CC82, CC83, CC84, CC85, CC86, CC87, CC88, CC89, CC90, CC91, CC92,' +
					'CC93, CC94, CC95'
				); 

				_[n].text = _[n].text.replace(/L64 - 63R/g,
					'L64, L63, L62, L61, L60, L59, L58, L57, L56, L55, L54, L53, L52, L51, L50, L49,' +
					'L48, L47, L46, L45, L44, L43, L42, L41, L40, L39, L38, L37, L36, L35, L34, L33,' +
					'L32, L31, L30, L29, L28, L27, L26, L25, L24, L23, L22, L21, L20, L19, L18, L17,' +
					'L16, L15, L14, L13, L12, L11, L10, L09, L08, L07, L06, L05, L04, L03, L02, L01,' +
					'  0,' +
					'01R, 02R, 03R, 04R, 05R, 06R, 07R, 08R, 09R, 10R, 11R, 12R, 13R, 14R, 15R, 16R,' +
					'17R, 18R, 19R, 20R, 21R, 22R, 23R, 24R, 25R, 26R, 27R, 28R, 29R, 30R, 31R, 32R,' +
					'33R, 34R, 35R, 36R, 37R, 38R, 39R, 40R, 41R, 42R, 43R, 44R, 45R, 46R, 47R, 48R,' +
					'49R, 50R, 51R, 52R, 53R, 54R, 55R, 56R, 57R, 58R, 59R, 60R, 61R, 62R, 63R'
				); 

				var text = _[n].text.split(",");
				for (var i = 0; i < text.length; i++) { text[i] = text[i].trim(); }
				_[n].text = text;

			}

			if (_[n].icon !== undefined) {
				var icon = _[n].icon.split(",");
				for (var i = 0; i < icon.length; i++) { icon[i] = icon[i].trim(); }
				_[n].icon = icon;
			}

		}

	})();

	return _;
}
