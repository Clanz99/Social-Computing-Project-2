# Secondo Progetto per il corso di Social Computing, A.A. 2020/21

L’obiettivo del progetto consiste nel generare e dispiegare un task di crowdsourcing utilizzando il software Crowd_Frame, e nel raccogliere alcuni giudizi ed analizzare alcuni dati di esempio. Il task deve permettere a un Requester di raccogliere giudizi relativi a un insieme di libri. Più in dettaglio, lo scopo del Requester è quello di far valutare a un insieme di worker “l’appeal” di diverse edizioni dello stesso libro.

1. Generate un task (insieme di HIT) con i seguenti requisiti:
  - Ci devono essere un totale di sei HIT
  - Ogni HIT deve contenere tre elementi che corrispondono a tre edizioni dei libri di cui si vogliono raccogliere i giudizi. Più precisamente, all'interno di ogni HIT i tre elementi di cui si vogliono raccogliere giudizi devono essere tre edizioni di libri diversi. Le diverse edizioni di uno stesso libro devono invece comparire in HIT diversi (ossia, non ci devono essere edizioni diverse di uno stesso libro nello stesso HIT). Cercate di definire l’ordine degli elementi all’interno di ogni HIT in modo da evitare quando possibile il bias (ad es., evitare che un dato libro compaia sempre nella stessa posizione).
  - Ogni edizione di un libro viene identificata dai seguenti attributi, i quali vanno
  tutti e 7 mostrati ai worker:
    i. Titolo
    ii. Autore
    iii. Numero di Pagine
    iv. Editore
    v. Prezzo
    vi. Copertina (da salvare come URL dell’immagine)
    vii. Anno di pubblicazione
2. Modificate opportunamente il layout HTML di Crowd_Frame in modo che si adatti ai requisiti sopra descritti, ovvero consenta di visualizzare gli attributi di ciascun libro nel corpo del task
3. Ogni HIT deve inoltre contenere nella parte iniziale (ossia, prima che il worker sia chiamato ad esprimere i giudizi delle edizioni dei libri) un questionario con almeno 4 domande per catturare i gusti letterari ed il background del worker, ad es.:
  - Qual è il tuo genere letterario preferito?
    i. Fantascienza
    ii. Saggi
    iii. Thriller
    iv. ...
  - Quanti libri leggi in un mese?
    i. 0-1
    ii. 2-5
    iii. 6-10
    iv. 11+
    v. ...
- ...
4. Per ciascun elemento (edizione), il worker deve valutare le seguenti dimensioni, tutte obbligatorie (fate attenzione a scegliere la scala di valutazione corretta!):
  - “Acquisteresti questo libro?” (Si/No)
  - “Il prezzo ti sembra adeguato?" (Si/No)
  - “Indica quanto ti sembra adeguato” (Slider con valori da min a max, scegliete
  voi min e max)
  - “Che impressione hai di questa edizione?” (Giustificazione scritta, almeno 10
  parole)
5. In aggiunta a quelle indicate sopra, aggiungete altre 2 dimensioni a piacere, scegliendo una scala di valutazione adeguata
6. Scrivete delle adeguate istruzioni generali e istruzioni di valutazione
7. Aggiungete un controllo di qualità sul tempo minimo di esecuzione del task, che deve essere di X secondi (scegliete voi X)
8. Dispiegate il task utilizzando i metodi descritti a lezione e dettagliati sulle slides

# CrowdsourcingSkeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
