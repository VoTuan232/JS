#define SCRUMBLE_KEY(d0, d1, d2, d3, d4, d5, d6, d7) \
	(unsigned char) d0 ^ 0x0f, \
	(unsigned char) d1 ^ 0x1e, \
	(unsigned char) d2 ^ 0x2d, \
	(unsigned char) d3 ^ 0x3c, \
	(unsigned char) d4 ^ 0x4b, \
	(unsigned char) d5 ^ 0x5a, \
	(unsigned char) d6 ^ 0x69, \
	(unsigned char) d7 ^ 0x78,

#define DESCRUMBLE_KEY(buf, KEY) \
	do { \
		for (int i = 0; i < KEY ## _LEN; i++) { \
			buf[i] = KEY[i] ^ (((i % 8) << 4) | (0xf - (i % 8))); \
		} \
	} while (0);


#define APP_CRYPTO_SEED_LEN (sizeof(APP_CRYPTO_SEED))

static const unsigned char APP_CRYPTO_SEED[] = {

	SCRUMBLE_KEY( 'j', 'p', '.', 'c', 'o', '.', 'r', 'o' )
	SCRUMBLE_KEY( 'l', 'a', 'n', 'd', '.', 'q', 'u', 'a' )
	SCRUMBLE_KEY( 't', 't', 'r', 'o',  0,   0,   0,   0  ) /* null terminator is required */

};


#define LIBTG_ACTIVATION_KEY_LEN (sizeof(LIBTG_ACTIVATION_KEY))

static const unsigned char LIBTG_ACTIVATION_KEY[] = {

	SCRUMBLE_KEY( 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07 )
	SCRUMBLE_KEY( 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f )
		// ...

};
