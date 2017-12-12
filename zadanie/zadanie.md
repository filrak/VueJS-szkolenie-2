# Zadanie domowe

Stworzymy prostą aplikację sklepową pozwalajaca przeglądac wybrane dla nas przez obsługę sklepu promocyjne produkty (po kolejnym szkoleniu nieco ją rozszerzymy). 
Stylowanie pozostaje po Waszej stronie, możecie je nawet pominąć jednak głównym zadaneim będzie tutaj stworzenie funkcjonalnego sklepu. 

Wyobraźmy sobie, że otrzymujemy od klienta listę wymagań funkcjonalnych. Sposób implementacji zalezy tylko od nas i tego co potrafimy zrobic z Vue. Załacze jednak kilka podpowiedzi aby łatwiej było wykorzystać poznaną wiedzę. Przy tworzeniu aplikacji skorzystajcie z `vue-cli` z templatką `webpack-simple`

1. Serwis ma posiadać trzy typy podstron. Na stronie głównej powinny zostać wyświetlone nazwy produktów. Po kliknięciu w każdy produkt mozemy przejsć do podstrony zawierajacej zdjęcie i cenę danego produktu. Kolorem czerwonym (klasą css) na stronie głównej powinny zostać oznaczone produkty niedostępne (`availibility: false`), Trzecią strona jest strona statyczna z kontaktem. Adresy podstrony z produktem powinny mieć postać `/product/id`, adres podstrony z kontaktem `/contact`. (produkt powinien być osobnym komponentem)

2. Powinniśmy mieć możliwość oznaczenia produktu na listingu jako niechciany kiedy wiemy, ze nie będzie nas on interesował co poskutkuje usunięciem produktu z listy (uzyjcie emisji zdarzeń z komponentu produktu).

3. Na górze strony powinno znajdowac się menuz  odnośnikiem do kontaktu i strony głównej

 Oto modele danych, na którym będziemy pracować.

 Produkty:
```
[
    { id: 1, name: 'Koszula', price: 10, imgSrc: 'hhttps://lb0.dstatic.pl/images/27362618/212x212xI250x250.jpg.pagespeed.ic.JT3ZyRXbt3.jpg', available: true },
    { id: 2, name: 'Spodnie', proce: 10, imgSrc: 'https://lb0.dstatic.pl/images/27554089/I250x250-spodnie-atc-1670-szary-risardi-xl.jpg', available: true },
    { id: 3, name: 'Majtki', price: 2, imgSrc: 'https://st.allani.pl/t/EhJzcI4Y7mCnpWcFDRMh13P-r78=/300x300/majtki-emporio-armani-a7ef8f8cfb1ad6511da188ffd94951d2cf624a24.jpg', available: true }
]
```


Kontakt:
```
[
    phone: "+48 123 456 789",
    email: "shop@divanteshop.com"
]
```

