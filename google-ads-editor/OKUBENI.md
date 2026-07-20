# Google Ads Editor - Yükleme Talimatları

Bu klasörde "Yonetici - Bina Temizligi" reklam grubu icin 6 CSV dosyasi var. Hepsi mevcut **binatemizlik2** kampanyasinin icine yeni bir reklam grubu olarak yuklenecek. (Not: onceki surumdeki "3 araba yikama hediye" teklifi reklamlardan tamamen kaldirildi.)

## Adim 1 — Google Ads Editor'u Indir (ucretsiz)
https://ads.google.com/intl/tr_tr/home/tools/ads-editor/

## Adim 2 — Hesabini Indir
1. Editor'u ac → Google hesabinla giris yap
2. Sol ustte hesabini sec
3. **Get recent changes / Son degisiklikleri al** butonuna bas
4. binatemizlik2 kampanyasi gorunmeli

## Adim 3 — CSV'leri Sirayla Yukle
Her dosya icin: **Account menusu → Import → From file** secip dosyayi sec, **Process file** de, **OK** de.

Sira ONEMLI — bu sirayla yukle:

1. `1-reklam-grubu.csv` — Yeni reklam grubunu olusturur
2. `2-anahtar-kelimeler.csv` — Anahtar kelimeleri ekler
3. `3-negatif-kelimeler.csv` — Negatif kelimeleri ekler
4. `4-responsive-search-ad.csv` — Reklam metinlerini ekler
5. `5-sitelink-uzantilari.csv` — Sitelink uzantilari
6. `6-callout-uzantilari.csv` — Callout uzantilari

## Adim 4 — Onizle ve Gonder
1. Sol altta **Pending changes / Bekleyen degisiklikler** sayisini kontrol et
2. **Post / Gonder** butonuna bas
3. **Yes, post X changes** de
4. Tamamlandiginda Ads paneline gec, kampanyayi kontrol et

## Adim 5 — Manuel Eklenecekler (CSV'ye girmez)
Bunlari Ads panelinden veya Editor'dan elle ekle:

- **Konum hedefleme:** Kampanya ayarlarindan **Gaziantep, Turkiye** sec
- **Dil:** Turkce
- **Gunluk butce:** 150-300 TL (test icin)
- **Reklam plani:** Pzt-Cmt 08:00-20:00
- **Arama uzantisi:** 0545 133 28 59
- **Konum uzantisi:** Google Business Profile'i bagla

## Notlar
- Turkce karakterler (ç, ğ, ı, ö, ş, ü) CSV import sorunu yapabilir. Sorun olursa Editor icinde tek tek duzeltirsin.
- Match type Turkce Editor'da: Exact = "Tam eslesme", Phrase = "Soz obegi eslemesi"
- Kampanya adi tum CSV'lerde **binatemizlik2** olarak ayarlandi. Ads hesabindaki gercek kampanya adi farkliysa (or. bosluklu "bina temizlik2"), CSV'leri ac ve hepsinde bu isme birebir uydur — yoksa Editor yeni bos kampanya olusturur.
- Yukleme sirasinda hata cikarsa hata satirini ekran goruntusu olarak paylas, duzeltelim.
