#!/usr/bin/perl
#===============================================================
#
#	@file	adjust_ver.pl
#	@brief	Adjust the version from quattro application
#	@author	nagatari
#	@date	2019/02/27
#
#===============================================================

print "$ARGV[0]\n";
print "$ARGV[1]\n";

#if ($#ARGV < 1) {
#	die "Usage: $0 product_setting.js Info.plist";
#}

$ps = $ARGV[0];
$ip = $ARGV[1];

open(FILE, "$ps") or die "Can not open \"$ps\"!\n";
while (<FILE>) {
	if (/version/) {
		@code = split();
		$ver = $code[1];
		$ver =~ s/[\',\,]//g;
	}
}
close(FILE);

#print "$ver\n";

if (! defined($ver)) {
	die "Can not find the version in \"$ps\"!\n";
}

# re-format version
@vn = split(/\./, $ver);
@va = splice(@vn, 0, 3);
$ver = join(".", @va);
push(@va, (@vn)? $vn[0]:0);

$bld = sprintf("%d.%d.%d", $va[0]*10+$va[1], $va[2], $va[3]);
#print "$bld\n";

open(FILE,"$ip") or die "Can not open \"$ip\"!\n";
$info = join("",<FILE>);
close(FILE);

$info =~ s/\x0D\x0A|\x0D|\x0A/\n/g;
$info =~ s/([\t ]+<key>CFBundleShortVersionString<\/key>\n[\t ]+<string>)([0-9]\..*)(<\/string>)/$1$ver$3/;
$info =~ s/([\t ]+<key>CFBundleVersion<\/key>\n[\t ]+<string>)([0-9\.]*)(<\/string>)/$1$bld$3/;

open(FILE, ">$ip") or die "Can not open \"$ip\"!\n";
print FILE $info;
close(FILE);

print "'$ip' is changed.\n"
