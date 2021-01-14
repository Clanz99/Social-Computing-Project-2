/*
 * This class provides a representation of a single document stored in single hit stored in the Amazon S3 bucket.
 * The attribute <index> is additional and should not be touched and passed in the constructor.
 * Each field of such Document must be mapped to an attribute of this class and set up in the constructor as it is shown.
 * Take care also in providing an implementation of the function; it is used to define if a document represents the high and low gold question.
 */
export class Document {

  /* DO NOT REMOVE THIS ATTRIBUTE */
  index: number;

  name: string;
  id: string;
  titolo: string;
  autore: string;
  numero_pagine: string;
  editore: string;
  prezzo: string;
  copertina: string;
  formato: string;
  anno_pubblicazione: string;

  constructor(
    index: number,
    data: JSON
  ) {
    /* DO NOT REMOVE THIS LINE */
    this.index =          index;

    this.name = data["name"];
    this.id = data["id"];
    this.titolo = data["titolo"];
    this.autore = data["autore"];
    this.numero_pagine = data["numero_pagine"];
    this.editore = data["editore"];
    this.prezzo = data["prezzo"];
    this.formato = data["formato"];
	  this.copertina = data["copertina"];
	  this.anno_pubblicazione = data["anno_pubblicazione"];
  }

  /*
   * This function determines if the current document is a gold question.
   * Possible values for the parameter: HIGH or LOW. (CAPS LOCK MANDATORY).
   * In this case, for example, if the id_par field is HIGH (LOW) then
   * the document is the HIGH (LOW) gold question
   */
  public getGoldQuestionIndex(kind: string) {
    if (this.name == kind) return this.index;
    return null
  }

}
