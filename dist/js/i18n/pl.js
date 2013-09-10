/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: @wet-boew-build.version@
 *
 */
/*
----- Polish dictionary (il8n) ---
 */
(function() {
	"use strict";
	var _pe = window.pe || {
		fn: {}
	};
	_pe.dic.ind = {
		'%lang-code': 'pl',
		'%lang-eng': '@%lang-eng@',
		'%lang-fra': 'polonais',
		'%lang-native': 'Język polski',
		'%all': 'Wszystko',
		'%home': 'Strona główna',
		'%main-page': 'Strona główna',
		'%top-of-page': 'Góra strony',
		'%you-are-in': 'Jesteś w:',
		'%welcome-to': 'Witamy',
		'%loading': 'ładowanie ...',
		'%processing': 'przetwarzanie ...',
		'%search': 'Szukaj',
		'%search-for-terms': 'Szukaj frazy:',
		'%no-match-found': 'Nie znaleziono odpowiedników',
		'%matches-found': {
			'mixin': 'Znaleziono [MIXIN] odpowiedników'
		},
		'%menu': 'Menu',
		'%settings': 'Ustawienia',
		'%languages': 'Języki',
		'%about': 'O',
		'%current': '(bieżący)',
		'%hide': 'Ukryj',
		'%error': 'Błąd',
		'%colon': ':',
		'%hyphen': ' - ',
		'%start': 'Rozpocznij',
		'%stop': 'Zatrzymaj',
		'%back': 'Wstecz',
		'%new-window': ' (Otwiera się w nowym oknie)',
		'%minute-ago': 'minutę temu',
		'%couple-of-minutes': 'kilka minut temu',
		'%minutes-ago': {
			'mixin': '[MIXIN] minut temu'
		},
		'%hour-ago': 'godzinę temu',
		'%hours-ago': {
			'mixin': '[MIXIN] godzin temu'
		},
		'%days-ago': {
			'mixin': '[MIXIN} dni temu'
		},
		'%yesterday': 'wczoraj',

		'%next': 'Następny',
		'%previous': 'Poprzedni',
		'%first': 'Pierwszy',
		'%last': 'Ostatni',

		/* Archived Web page template */
		'%archived-page': 'Ta strona internetowa została zarchiwizowana.',
		/* Menu bar */
		'%sub-menu-help': '(dostęp do menu - klawisz Enter; wyjście z menu - klawisz Esc)',
		/* Tabbed interface */
		'%tab-rotation': {
			'disable': 'Zatrzymaj przewijanie zakładek',
			'enable': 'Rozpocznij przewijanie zakładek'
		},
		'%tab-list': 'Lista zakładek',
		'%tab-panel-end-1': 'Koniec tego panelu zakładek.',
		'%tab-panel-end-2': 'Powrót do listy zakładek',
		'%tab-panel-end-3': 'lub kontynuuj do końca strony.',
		/* Multimedia player */
		'%play': 'Odtwarzanie',
		'%pause': 'Pauza',
		'%open': 'Otwórz',
		'%close': 'Zamknij',
		'%rewind': 'Przewiń do tyłu',
		'%fast-forward': 'Szybkie przewijanie do przodu',
		'%mute': {
			'enable': 'Bez dźwięku',
			'disable': 'Przywróć dźwięk'
		},
		'%closed-caption': {
			'disable': 'Ukryj podpisy',
			'enable': 'Pokaż podpisy'
		},
		'%closed-caption-error': 'Błąd w ładowaniu podpisów',
		'%audio-description': {
			'enable': 'Włącz informację audio',
			'disable': 'Wyłącz informację audio'
		},
		'%progress-bar': 'przewijanie do przodu - prawa strzałka, przewijanie do tyłu - lewa strzałka',
		'%no-video': 'Aktualna wersja przeglądarki nie pozwala na odtworzenie tego pliku video, można go ściągnąć klikając poniżej',
		'%position': 'Aktualna pozycja:',
		'%percentage': '% odtwarzania',
		'%duration': 'Czas całkowity:',
		'%buffered': 'Zachowane w pamięci:',
		/* Share widget */
		'%favourite': 'Ulubione',
		'%email': 'Email',
		'%share-text': 'Prześlij tę stronę',
		'%share-hint': ' do {s} ',
		'%share-email-subject': 'Interesująca strona',
		'%share-email-body': 'Wydaje mi się że ta strona może cię zainteresować:\n{t} ({u})',
		'%share-fav-title': '(zaznacz tę stronę)',
		'%share-manual': 'Proszę zamknąć to okienko i nacisnąć Ctrl-D aby zaznaczyć te stronę.',
		'%share-showall': 'Pokaż wszystko ({n})',
		'%share-showall-title': 'Wszystkie strony w zakładkach',
		'%share-disclaimer' : 'Nie wyrażamy bezposrednio lub pośrednio poparcia dla żadnych produktów ani usług.',
		/* Form validation */
		'%form-not-submitted': 'Nie można było wysłać formularza, ponieważ ',
		'%errors-found': ' znaleziono błędy',
		'%error-found': ' znaleziono błąd',
		/* Date picker */
		'%datepicker-hide': 'Ukryj kalendarz',
		'%datepicker-show': 'Proszę wybrać datę z kalendarza:',
		'%datepicker-selected': 'Wybrany',
		/* Calendar */
		'%calendar-weekDayNames': ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
		'%calendar-monthNames': ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
		'%calendar': 'Kalendarz',
		'%calendar-currentDay': '(Bieżący dzień)',
		'%calendar-goToLink': 'Idź do<span class="wb-invisible"> miesiąca w roku</span>',
		'%calendar-goToTitle': 'Idź do miesiąca w roku',
		'%calendar-goToMonth': 'Miesiąc:',
		'%calendar-goToYear': 'Rok:',
		'%calendar-goToButton': 'Przejdź',
		'%calendar-cancelButton': 'Anuluj',
		'%calendar-previousMonth': 'Poprzedni miesiąc: ',
		'%calendar-nextMonth': 'Następny miesiąc: ',
		/* Slideout */
		'%show-toc': 'Pokaż',
		'%show-text': 'Pokaż spis treści',
		'%hide-text': 'Ukryj spis treści',
		'%table-contents': 'spis treści',
		/* Lightbox */
		'%lb-current': 'Pozycja {current} z {total}',
		'%lb-next': 'Następna pozycja',
		'%lb-prev': 'Poprzednia pozycja',
		'%lb-xhr-error': 'Nie udało się załadować treści.',
		'%lb-img-error': 'Nie udało się załadować obrazu.',
		'%lb-slideshow': 'Pokaz slajdów',
		/* jQuery Mobile */
		'%jqm-expand': 'kliknij aby rozwinąć spis treści',
		'%jqm-collapse': 'kliknij aby zwinąć spis treści',
		'%jqm-clear-search': 'Wyczyść kryteria wyszukiwania',
		'%jqm-filter': 'Filtruj pozycje',
		'%jqm-tbl-col-toggle': 'Kolumny ...',
		/* Charts widget */
		'%table-mention': 'Tabela',
		'%table-following': 'Wykres. Szczegóły w tabeli poniżej.',
		/* Session timeout */
		'%st-timeout-msg': 'Twoja sesja za chwilę się zakończy. Masz czas do #expireTime#, aby uaktywnić przycisk "OK" poniżej i przedłużyć sesję.',
		'%st-msgbox-title': 'Ostrzeżenie: limit czasu sesji',
		'%st-already-timeout-msg': 'Niestety sesja już się skończyła. Zaloguj się ponownie.',
		/* Toggle details */
		'%td-toggle': 'Wyłącz wszystko',
		'%td-open': 'Rozwiń wszystko',
		'%td-close': 'Zwiń wszystko',
		'%td-ttl-open': 'Rozwiń wszystkie sekcje zawartości',
		'%td-ttl-close': 'Zwiń wszystkie sekcje zawartości',
		/* Table enhancement */
		'%sSortAscending': ': włączyć dla sortowania rosnąco',
		'%sSortDescending': ': włączyć dla sortowania malejąco',
		'%sEmptyTable': 'Nie ma danych w tabeli',
		'%sInfo': 'Wyświetlono _START_ do _END_ z _TOTAL_ pozycji',
		'%sInfoEmpty': 'Wyświetlono 0 do 0 z 0 pozycji',
		'%sInfoFiltered': '(filtrowane z _MAX_ wszystkich wpisów)',
		'%sInfoThousands': '&#160;',
		'%sLengthMenu': 'Pokaż _MENU_ wpisów',
		/* Geomap */
		'%geo-mapcontrol': 'Kontrola mapy',
		'%geo-zoomin': 'Powiększ',
		'%geo-zoomout': 'Pomniejsz',
		'%geo-zoomworld': 'Powiększenie do zasięgu mapy',
		'%geo-zoomfeature': 'Powiększ do elementu',
		'%geo-scaleline': 'skala mapy',
		'%geo-mouseposition': 'Szerokość i długość geograficzna kursora myszy',
		'%geo-ariamap': 'Obiekt na mapie. Opisy funkcji na mapie są w tabeli poniżej.',
		'%geo-accessibilize': '<strong>Dla użytkowników klawiatury:</strong> Kiedy mapa jest w centrum, używaj klawiszy strzałek, aby przesunąć mapę oraz klawiszy plus i minus, aby ją powiększyć lub zmniejszyć. Klawisze strzałek nie będą przesuwać mapy po powiększeniu jej do granicy mapy.',
		'%geo-accessibilizetitle': 'Instrukcje: nawigacja mapy',
		'%geo-togglelayer': 'Przełączyć wyświetlanie warstwy',
		'%geo-hiddenlayer': 'Warstwa ta jest obecnie ukryta.',
		'%geo-basemapurl': 'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg',
		'%geo-basemaptitle': 'BaseMaps_CBMT3978',
		'%geo-basemapurltxt': 'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg',
		'%geo-attributionlink': 'http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en',
		'%geo-attributiontitle': 'GeoGratis - Kanada baza map (tylko w języku angielskim lub francuskim)',
		'%geo-select': 'Wybrać',
		'%geo-labelselect': 'Wybierz element na mapie',
		/* Disable/enable PE */
		'%pe-disable': 'Podstawowa wersja HTML',
		'%pe-enable': 'Wersja standardowa'
	};
	_pe.document.trigger('languageloaded');
	window.pe = _pe;
	return _pe;
}());
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: PL (Polish; język polski, polszczyzna)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "To pole jest wymagane.",
		remote: "Proszę o wypełnienie tego pola.",
		email: "Proszę o podanie prawidłowego adresu email.",
		url: "Proszę o podanie prawidłowego URL.",
		date: "Proszę o podanie prawidłowej daty.",
		dateISO: "Proszę o podanie prawidłowej daty (ISO).",
		number: "Proszę o podanie prawidłowej liczby.",
		digits: "Proszę o podanie samych cyfr.",
		creditcard: "Proszę o podanie prawidłowej karty kredytowej.",
		equalTo: "Proszę o podanie tej samej wartości ponownie.",
		accept: "Proszę o podanie wartości z prawidłowym rozszerzeniem.",
		maxlength: $.validator.format("Proszę o podanie nie więcej niż {0} znaków."),
		minlength: $.validator.format("Proszę o podanie przynajmniej {0} znaków."),
		rangelength: $.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),
		range: $.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),
		max: $.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),
		min: $.validator.format("Proszę o podanie wartości większej bądź równej {0}.")
	});
}(jQuery));