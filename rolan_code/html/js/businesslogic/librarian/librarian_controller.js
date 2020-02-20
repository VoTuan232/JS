/**
 * [概要]
 * LIBRARIAN画面の初期設定、disable時の処理
 *
 * [使用箇所]
 * LIBRARIAN画面
 *
 * [改善ポイント]
 * ・今回扱うLIBRARIANで扱うLIBRARIANのmodeは一種類のみのため(All Data Backup, StompBox Data Backupを除く)、
 *  globalに定義する時に配列に格納しないようにしたほうが良い。
 * 
 */

/**
 * Disconnectedになった場合の処理
 * すべてのダイアログを閉じるかつ現在通信を監視中のObserverを破棄し、
 * LiveSetリスト画面へ遷移する。
 */
window.librarianForceTransition = function () {
    popup_close(LIBRARIAN_ELEMENT_IDS.createLivesetDialog.slice(1));
    popup_close(LIBRARIAN_ELEMENT_IDS.renameLivesetDialog.slice(1));
    popup_close(LIBRARIAN_ELEMENT_IDS.renamePatchDialog.slice(1));
    popup_close(LIBRARIAN_ELEMENT_IDS.deleteLivesetDialog.slice(1));
    popup_close(LIBRARIAN_ELEMENT_IDS.deletePatchDialog.slice(1));
    popup_close(LIBRARIAN_ELEMENT_IDS.importFromDialog.slice(1));
    popup_close(LIBRARIAN_ELEMENT_IDS.exportToDialog.slice(1));
    PROGRESS_DIALOG_MAP.import.close();
    PROGRESS_DIALOG_MAP.export.close();
    COMPLETE_DIALOG_MAP.import.close();
    COMPLETE_DIALOG_MAP.export.close();
    librarianCommonInfo.librarians[librarianCommonInfo.settingMode].cancel();
    librarianCommonInfo.librarians[librarianCommonInfo.settingMode].observers = [];
    librarianCommonInfo.librariansBass[librarianCommonInfo.settingMode].cancel();
    librarianCommonInfo.librariansBass[librarianCommonInfo.settingMode].observers = [];
};


/* initialize */
window.initLibrarian = function () {
    // Librarian Objectを作成し、グローバルに定義
    for (let i = 0; i < ProductSetting.librarian.length; i++) {
        librarianCommonInfo.librarians.push(new Librarian(ProductSetting.librarian[i].config));
        librarianCommonInfo.librariansBass.push(new Librarian(ProductSetting.librarianBass[i].config));
    }
    // USER PATCHのmodelを生成
    librarianCommonInfo.instLiveset = new LibrarianModel('SY-1000 USER PATCH DATA', true);
    assignLibrarianDynamicDOMController();
    assignLibrarianStaticDOMEvents();
    // librarianServices.initStorage2(); // Debug用
};

window.reloadConnectApp = function () {
    const BTN_EDITOR = 0;
    $('#header-group-btn').trigger('elf-change', BTN_EDITOR);
    $('#header-group-btn').trigger('elf-update', BTN_EDITOR);
}



