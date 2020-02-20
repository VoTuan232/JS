#!/bin/sh

# 1. mkdir ./files and put the files you want to package into ./files folder.
# 2. change 'IDENTIFIER' in this script and distribution.xml.
# 3. modify 'OUTPUT' and 'TARGET_DIR' appropriately

#
# NOTARIZATION
#
# for notarizing your app, you must build the app with the following settings:
#
#  Xcode - Build Settings
#  [Signing]
#    Code Signing Style : Manual
#    Code Signing Identity : Developer ID Application
#    Development Team : Roland Corporation
#    Code Signing Inject Base Entitlements : No
#    Enable Hardened Runtime : Yes
#    Other Code Signing Flags : --timestamp
#    Provisioning Profile : None
#

IDENTIFIER="jp.co.roland.BOSS-TONE-STUDIO-for-SY-1000.pkg"

OUTPUT="BOSS TONE STUDIO for SY-1000 Installer.pkg"
TARGET_DIR="/Applications/BOSS/SY-1000/"

CERTS_NAME="Developer ID Installer: Roland Corporation"
ASC_PROVIDER="RolandCorporation"

FILES="./files"
DISTXML="./distribution.xml"
RESOURCES="./Resources"
PKGNAME="./_tmp_.pkg"
PRODUCT="__tmp__.pkg"
VERSION=1

set -e

chmod -R 755 "$FILES"

pkgbuild --root "$FILES" \
         --identifier $IDENTIFIER \
         --install-location $TARGET_DIR \
         --version $VERSION \
         "$PKGNAME"

productbuild --distribution $DISTXML \
             --package-path . \
             --resources $RESOURCES \
             "$PRODUCT"

if [ "$1" = "false" ]; then
    cp -f "$PRODUCT" "$OUTPUT"
elif [ "$1" = "--nosign" ]; then
    cp -f "$PRODUCT" "$OUTPUT"
else
    productsign --sign "$CERTS_NAME" "$PRODUCT" "$OUTPUT"
fi

rm -f "$PRODUCT"
rm -f "$PKGNAME"

if [ "$1" != "false" ] && [ "$1" != "--nosign" ]; then
  AC_USERNAME="$1";
  if [ "$AC_USERNAME" = "" ]; then
    /bin/echo -n "Enter your Apple Developer ID:"
    read AC_USERNAME
  fi
  xcrun altool --notarize-app --file "$OUTPUT" --primary-bundle-id "$IDENTIFIER" -u "$AC_USERNAME" --asc-provider "$ASC_PROVIDER"

  echo
  echo "\033[1mAfter you get the email of completion of notarization from Apple, run the following command to staple your file."
  echo "\033[1m> xcrun stapler staple $OUTPUT"
  echo "\033[0m"
fi
