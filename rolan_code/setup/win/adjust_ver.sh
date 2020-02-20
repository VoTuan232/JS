#!/bin/sh
#===============================================================
#
#	@file	adjust_ver.sh
#	@brief	Adjust the version from quattro application
#	@author	nagatari
#	@date	2019/02/27
#
#===============================================================

if [ $# -lt 3 ]; then
	echo "Usage: $0 product_setting.js version.h setup.iss"
	exit 1
fi

VER=$(sed -n "/version/p" $1 | sed -e "s/[^0-9\.]//g")
BLD=$(sed -n "/build/p" $1 | sed -e "s/[^0-9]*//g")
_VER=`echo $VER | sed "s/\./\,/g"`
echo $VER
echo $_VER
echo $BLD
sed -i "/VER_VERSION\\t/c\#define VER_VERSION\\t\\t\\t\\t$_VER,$BLD" $2
sed -i "/VER_VERSION_STR/c\#define VER_VERSION_STR\\t\\t\\t\"$VER ($BLD)\\\0\"" $2
echo "'$2' is changed."

sed -i "/#define MyAppVersion/c\#define MyAppVersion\\t\"$VER ($BLD)\"" $3
echo "'$3' is changed."
sed -i "/#define MyAppVersion/c\#define MyAppVersion\\t\"$VER ($BLD)\"" $4
echo "'$4' is changed."
