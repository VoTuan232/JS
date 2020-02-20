/**
 * [概要]
 * BOSS TONE CENTRAL画面 DOM生成とDOMイベント処理を定義
 * 
 * [使用箇所]
 * BOSS TONE CENTRAL画面
 * 
 * [改善ポイント]
 * DOM生成処理の中でDOMイベント処理を定義している箇所があり、
 * 記述が多くコードが見づらくなっている。
 * 外部API(Youtube, Sound Cloud)を使用しているため、
 * それらの仕様が変更になった際にAPIが使えなくなる可能性が高い。
 */

(function () {
    const TONECENTRAL_ELEMENT_IDS = Object.freeze({
        footerId: '#header-group-btn',
        tonecentralTopId: '#tone-central-liveset-list',
        livesetId: '#tone-central-liveset-',
        livesetContainerId: "#tone-central-liveset-container-",
        tonecentralPopupBtnId: "#tonecentral-popup-btn",
        tonecentralInfoId: '#tone-central-info',
        tonecentralLivesetInfoFrameId: '#tone-central-info-body-frame',
        tonecentralLivesetInfoId: '#tone-central-liveset-info',
        tonecentralTitleId: '#tone-central-title',
        toncentralLivesetSecondaryId: "#tone-central-liveset-secondary",
        tonecentralAddLivesetBtn: "#tone-central-add-btn",
        tonecentralInfoCloseBtn: "#tone-central-info-close",
        scplayer: "#scplayer",
        patchList: '#tone-central-patch-list'
    });

    const TC_UI_SERVICE_CONST = Object.freeze({
        defaultFontSize: 13,
        defaultWidth: 106,
        aspectRaito: 1.6
    });

    const TONECENTRAL_ELEMENT_CLASSES = Object.freeze({
        livesetCell: '.tone-central-liveset-cell',
        TC_PATCH_LIST_CONTROL: '.tone-central-patch-list-control',
        TC_PATCH_CHECK: '.tone-central-patch-check',
        TC_SC_CONTAINER: 'tone-central-liveset-soundcloud'
    });

    let tcLivesetList = {};
    let tcPatchesObj = {};
    let tcTargetLanguage = "en";

    window.ToneCentralUiService = {
        initialize: function () {
            if (ToneCentralService.ytApiSuccess === false) {
                tcLoadYoutubeApi();
            }
            if (ToneCentralService.scApiSuccess === false) {
                tcLoadSCApi();
            }
            $(TONECENTRAL_ELEMENT_IDS.tonecentralTopId).empty();
            $(TONECENTRAL_ELEMENT_IDS.patchList).empty();
            $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoId).empty();
            ToneCentralService.tcLoadLivesetList();
        },
        tcDrawLivesetList: function (livesetList) {
            let items = livesetList;
            if (items !== null) {
                // var itemCount = items.length;
                items.forEach(function (element, i) {
                    let liveset = ToneCentralUiService.tcGetLivesetObj(items[i]);
                    let livesetDom = $('<label>');
                    livesetDom.attr('id', 'tc-liveset-cell-' + liveset.id);
                    livesetDom.attr('for', 'liveset-radio-' + i);
                    livesetDom.attr('class', 'tone-central-liveset-cell');
                    let livesetImg = $('<img>');
                    livesetImg.attr('src', liveset.imageUrl);
                    $(livesetDom).append(livesetImg);
                    let livesetName = $('<div>');
                    livesetName.attr('class', 'tone-central-liveset-title');
                    livesetName.html(liveset.title);
                    $(livesetDom).append(livesetName);
                    let radioBtn = $('<input>');
                    radioBtn.attr('id', 'liveset-radio-' + i);
                    radioBtn.attr('type', 'radio');
                    radioBtn.attr('name', 'tc-liveset-list');
                    radioBtn.attr('value', i);
                    $(TONECENTRAL_ELEMENT_IDS.tonecentralTopId).append(radioBtn);
                    $(TONECENTRAL_ELEMENT_IDS.tonecentralTopId).append(livesetDom);
                    tcLivesetList[liveset.id] = liveset;
                    $("#tc-liveset-cell-" + liveset.id).on('click', function () {
                        $(TONECENTRAL_ELEMENT_IDS.patchList).empty();
                        ToneCentralService.tcLoadLivesetInfo(tcLivesetList[liveset.id]);
                    });
                    if (i === 0) {
                        $(TONECENTRAL_ELEMENT_CLASSES.livesetCell).trigger('click', liveset.basename);
                    }
                });
            }
        },
        tcGetLivesetObj: function (item) {
            if (language === "ja") { tcTargetLanguage = "ja"; } else { tcTargetLanguage = "en"; }
            let livesetObj = {
                id: "", title: "", basename: "", permalink: "", categories: [],
                tags: [], imageUrl: "", description: "", text: "", caption: "", youtubeUrl: "",
                youtubethumbnailUrl: "", soundcloudUrl: ""
            };
            if (item !== undefined) {
                if (item.lang !== undefined && item.customFields !== undefined) {
                    if (item.lang[tcTargetLanguage] !== undefined) {
                        if (item.id !== undefined) { livesetObj.id = item.id }
                        if (item.lang[tcTargetLanguage].title !== undefined) { livesetObj.title = item.lang[tcTargetLanguage].title }
                        if (item.basename !== undefined) { livesetObj.basename = item.basename }
                        if (item.permalink !== undefined) { livesetObj.permalink = item.permalink }
                        if (item.categories !== undefined) { livesetObj.categories = item.categories }
                        if (item.tags !== undefined) { livesetObj.tags = item.tags }
                        if (item.lang[tcTargetLanguage].image !== undefined) { livesetObj.imageUrl = item.lang[tcTargetLanguage].image }
                        if (item.lang[tcTargetLanguage].description !== undefined) { livesetObj.description = item.lang[tcTargetLanguage].description }
                        if (item.lang[tcTargetLanguage].text !== undefined) { livesetObj.text = item.lang[tcTargetLanguage].text }
                        for (var i in item.customFields) {
                            if (item.customFields.hasOwnProperty(i)) {
                                if (item.customFields[i].basename === "caption_" + tcTargetLanguage) {
                                    livesetObj.caption = item.customFields[i].value;
                                }
                            }
                        }
                        if (item.lang[tcTargetLanguage].youtubeurl !== undefined) { livesetObj.youtubeUrl = item.lang[tcTargetLanguage].youtubeurl }
                        if (item.lang[tcTargetLanguage].youtubethumbnail !== undefined) { livesetObj.youtubethumbnailUrl = item.lang[tcTargetLanguage].youtubethumbnail }
                        if (item.lang[tcTargetLanguage].soundcloudurl !== undefined) { livesetObj.soundcloudUrl = item.lang[tcTargetLanguage].soundcloudurl }
                    }
                }
            }
            return livesetObj;
        },
        tcDrawLivesetInfo: function (liveset, livesetObj, scData) {
            $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoId).empty();
            $(TONECENTRAL_ELEMENT_IDS.toncentralLivesetSecondaryId).empty();
            if ($(TONECENTRAL_ELEMENT_IDS.tonecentralInfoId).css('display') !== "none" && liveset !== undefined) {
                $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoId).scrollTop(0);
                if (livesetObj !== null) {
                    let obj = livesetObj;
                    let deCodeLivesetObj = new LibrarianCell(APP_MODE === MODE.GUITAR ? ProductSetting.librarian[librarianCommonInfo.settingMode].config : ProductSetting.librarianBass[librarianCommonInfo.settingMode].config);
                    for (let index = 0; index < obj.data[0].length; index++) {
                        deCodeLivesetObj.paramSet = obj.data[0][index].paramSet;
                        let patchName = deCodeLivesetObj.value();

                        let patchDom = $('<label>');
                        patchDom.attr('id', patchName);
                        patchDom.attr('for', 'tc-patch-radio-' + index);
                        patchDom.attr('class', 'tone-central-patch-cell');
                        let patchTitle = $('<div>');
                        patchTitle.attr('class', 'tone-central-patch-title');
                        patchTitle.html(patchName);
                        $(patchDom).append(patchTitle);
                        let radioBtn = $('<input>');
                        radioBtn.attr('id', 'tc-patch-radio-' + index);
                        radioBtn.attr('type', 'radio');
                        radioBtn.attr('name', 'tc-patch-list');
                        radioBtn.attr('value', index);
                        $(TONECENTRAL_ELEMENT_IDS.patchList).append(radioBtn);
                        $(TONECENTRAL_ELEMENT_IDS.patchList).append(patchDom);
                        tcPatchesObj[patchName] = obj.data[0][index];
                    }
                }
                $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoFrameId).addClass('tone-central-liveset-info');
                $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoId).empty();
                function getWindowWidth() {
                    return window.innerWidth;
                }
                let imgSize = getWindowWidth() > 568 ? '200' : '140';
                let titleSize = getWindowWidth() > 568 ? '50px' : '30px';
                let artist = '<div class="tone-central-liveset-header">';
                artist += '<div class="tone-central-liveset-header-background" ';
                artist += 'style="background-image:url(' + liveset.imageUrl + ');"></div>';
                artist += '<div class="tone-central-liveset-innerhead"><div class="tone-central-liveset-innerhead2">';
                artist += '<div class="tone-central-liveset-header-icon">';
                artist += '<img src="' + liveset.imageUrl + '"';
                artist += ' width="' + imgSize + '" height="' + imgSize + '"></div>';
                artist += '<div class="tone-central-liveset-header-text" style="margin-left:' + (parseInt(imgSize) + 40) + 'px">';
                artist += '<div class="tone-central-liveset-header-title"';
                artist += ' style="font-size' + titleSize + '"><span>' + liveset.title + '</span></div>';
                artist += '<div class="tone-central-liveset-header-excerpt"><p>' + liveset.description + '</p></div>';
                artist += '</div></div></div></div>';
                $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoId).append(artist);

                let livesetBody = '<div class="tone-central-liveset-body">';
                livesetBody += '<div style="padding: 0px 10px;">';
                livesetBody += (tcTargetLanguage === 'ja') ? '<div class="tone-central-liveset-text-jp">' : '<div class="tone-central-liveset-text-en">';
                livesetBody += '<p>' + liveset.text + '</p></div>';
                $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoId).append(livesetBody);
                $(TONECENTRAL_ELEMENT_IDS.tonecentralLivesetInfoId).append('<div id="tone-central-liveset-secondary" class="tone-central-liveset-secondary"></div>');
                if (liveset.youtubeUrl !== "" && ToneCentralService.ytApiSuccess === true) {
                    let youtube = '<div id="movie" class="tone-central-youtube-container"><div class="tone-central-movie">';
                    let id = /[/?=]([-\w]{11})/.exec(liveset.youtubeUrl);
                    youtube += '<div id="youtubePlayer"></div>';
                    youtube += '</div></div>';
                    $(TONECENTRAL_ELEMENT_IDS.toncentralLivesetSecondaryId).append(youtube);
                    ToneCentralUiService.createYoutubePlayer(id[1]);
                }
                if (ToneCentralService.scApiSuccess === true && scData && scData.uri !== undefined) {
                    let soundcloud = '<div class="tone-central-soundcloud-container"><div class="tone-central-liveset-soundcloud">';
                    soundcloud += '<iframe id="scplayer" width="100%" height="450" src="" scrolling="no" frameborder="no"></div></div>';
                    $(TONECENTRAL_ELEMENT_IDS.toncentralLivesetSecondaryId).append(soundcloud);
                    $("#scplayer").attr('src', 'https://w.soundcloud.com/player/?url=' + scData.uri + '&auto_play=false&show_artwork=true&color=47a5db');
                    ToneCentralService.tcSCPlayer = SC.Widget(document.getElementById('scplayer'));
                    ToneCentralService.tcSCPlayer.bind(SC.Widget.Events.READY, function () {
                        ToneCentralService.tcSCPlayer.bind("play", function () {
                            ToneCentralService.tcSCPlayer.getCurrentSound(function (currentSound) {
                                playSoundCloudLogManager.post(currentSound.title);
                            });
                        });
                    });
                }
                let caption = '<div class="tone-central-caption-container">';
                caption += '<div class="tone-central-caption-header">Live Set</div>';
                let captionClass = (tcTargetLanguage === "ja") ? 'class="description-jp"' : 'class="description-en"';
                caption += liveset.caption.replace(/class="description"/g, captionClass);
                caption += '</div>';
                $(TONECENTRAL_ELEMENT_IDS.toncentralLivesetSecondaryId).append(caption);

                $('.tone-central-patch-cell').on('click', function (e) {
                    if ($(this)[0] !== undefined) {
                        let patchTitle = $(this)[0].id;
                        if (patchTitle !== undefined) {
                            let patchData = tcPatchesObj[patchTitle];
                            if (patchData.paramSet !== undefined) {
                                librarianServices.previewPatch([patchData]);
                            }
                        }
                    }
                });
                $(TONECENTRAL_ELEMENT_IDS.tonecentralInfoCloseBtn).on('click', function () {
                    $(TONECENTRAL_ELEMENT_IDS.scplayer).attr('src', '');
                    $(TONECENTRAL_ELEMENT_CLASSES.TC_SC_CONTAINER).html("");
                });
            }
        },
        createYoutubePlayer: function (id) {
            if (ToneCentralService.ytApiSuccess === true) {
                ToneCentralService.tcYoutubePlayer = new YT.Player('youtubePlayer', {
                    height: '390',
                    width: '640',
                    videoId: id,
                    playerVars: { autoplay: 0, start: 1, playsinline: 1 },
                    events: {
                        'onReady': ToneCentralUiService.onPlayerReady,
                        'onStateChange': ToneCentralUiService.onPlayerStateChange
                    }
                });
            }
        },
        onPlayerReady: function (event) {
            if (event.target !== undefined) {
                if (event.target.a !== undefined) {
                    $(event.target.a).contents().find('a').remove();
                }
            }
        },
        onPlayerStateChange: function (event) {
            if (ToneCentralService.ytApiSuccess === true) {
                if (event.data == YT.PlayerState.PLAYING) {
                    playYouTubeLogManager.post(1);
                }
            }
        },
        addLiveset: function () {
            let obj = ToneCentralService.tcLivesetObj;
            if (obj !== null) {
                if (obj.name !== undefined && obj.data !== undefined) {
                    let name = obj.name;
                    let patchList = obj.data;
                    if (name !== undefined && patchList !== undefined) {
                        addLivesetLogManager.post(name);
                        librarianServices.importToneCentral(name, patchList);
                    }
                }
            }
        },
        assignDomEvent: function () {
            $(TONECENTRAL_ELEMENT_IDS.tonecentralAddLivesetBtn).off('click');
            $(TONECENTRAL_ELEMENT_IDS.tonecentralAddLivesetBtn).on('click', function (e) {
                ToneCentralUiService.addLiveset();
            });
        }
    };

    window.toneCentralController = {
        stopYoutubeVideo: function () {
            if (ToneCentralService.tcYoutubePlayer !== null && YT.PlayerState.PLAYING) {
                ToneCentralService.tcYoutubePlayer.pauseVideo();
            }
        },
        stopScMusicPlayer: function () {
            if (ToneCentralService.tcSCPlayer !== null && SC.Widget.Events.PLAY) {
                ToneCentralService.tcSCPlayer.pause();
            }
        }
    };

    window.eventsToneCentral = function () {
        $(TONECENTRAL_ELEMENT_IDS.footerId).on('elf-changed', function (e, v) {
            if (v === 2) {
                e.stopPropagation();
                e.preventDefault();
                ToneCentralUiService.initialize();
            }
        });
    };
}());

function onYouTubeIframeAPIReady() {
    ToneCentralService.ytApiSuccess = YT.hasOwnProperty('Player');
};