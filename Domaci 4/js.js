"use strict";

const ucenici = [
  {
    ime: "Ana",
    prezime: "Kovacevic",
    godinaRodjenja: 2005,
    pol: "zenski",
    ocjene: {
      matematika: 4,
      maternjiJezik: 5,
      engleskiJezik: 3,
      biologija: 4,
      likovnaKultura: 5,
    },
  },
  {
    ime: "Marko",
    prezime: "Petrovic",
    godinaRodjenja: 2006,
    pol: "muski",
    ocjene: {
      matematika: 5,
      maternjiJezik: 4,
      engleskiJezik: 5,
      biologija: 3,
      likovnaKultura: 4,
    },
  },
  {
    ime: "Elena",
    prezime: "Jovanovic",
    godinaRodjenja: 2005,
    pol: "zenski",
    ocjene: {
      matematika: 3,
      maternjiJezik: 5,
      engleskiJezik: 4,
      biologija: 4,
      likovnaKultura: 4,
    },
  },
  {
    ime: "Ivan",
    prezime: "Popovic",
    godinaRodjenja: 2007,
    pol: "muski",
    ocjene: {
      matematika: 5,
      maternjiJezik: 4,
      engleskiJezik: 5,
      biologija: 5,
      likovnaKultura: 3,
    },
  },
  {
    ime: "Jelena",
    prezime: "Nikolic",
    godinaRodjenja: 2006,
    pol: "zenski",
    ocjene: {
      matematika: 4,
      maternjiJezik: 3,
      engleskiJezik: 5,
      biologija: 4,
      likovnaKultura: 4,
    },
  },
  {
    ime: "Stefan",
    prezime: "Stojanovic",
    godinaRodjenja: 2007,
    pol: "muski",
    ocjene: {
      matematika: 5,
      maternjiJezik: 4,
      engleskiJezik: 5,
      biologija: 3,
      likovnaKultura: 5,
    },
  },
  {
    ime: "Milica",
    prezime: "Simic",
    godinaRodjenja: 2005,
    pol: "zenski",
    ocjene: {
      matematika: 4,
      maternjiJezik: 5,
      engleskiJezik: 4,
      biologija: 3,
      likovnaKultura: 4,
    },
  },
  {
    ime: "Nikola",
    prezime: "Pavlovic",
    godinaRodjenja: 2006,
    pol: "muski",
    ocjene: {
      matematika: 3,
      maternjiJezik: 4,
      engleskiJezik: 5,
      biologija: 5,
      likovnaKultura: 4,
    },
  },
  {
    ime: "Sara",
    prezime: "Ilic",
    godinaRodjenja: 2007,
    pol: "zenski",
    ocjene: {
      matematika: 5,
      maternjiJezik: 3,
      engleskiJezik: 5,
      biologija: 4,
      likovnaKultura: 3,
    },
  },
  {
    ime: "Luka",
    prezime: "Djordjevic",
    godinaRodjenja: 2005,
    pol: "muski",
    ocjene: {
      matematika: 4,
      maternjiJezik: 4,
      engleskiJezik: 4,
      biologija: 5,
      likovnaKultura: 5,
    },
  },
];
//fukcija za iracunavanje prosjeka
function izracunajProsjek(ucenik) {
  const ocjene = Object.values(ucenik.ocjene);
  let suma = 0;
  for (let i = 0; i < ocjene.length; i++) {
    suma += ocjene[i];
  }
  const prosjek = suma / ocjene.length;
  ucenik.prosjek = prosjek;
  return prosjek;
}
//fukcija za dodjelu uspjeha
function dodjeliUspjeh(ucenik) {
  const prosjek = izracunajProsjek(ucenik);
  let uspjeh;
  if (prosjek >= 4.5) {
    uspjeh = "odlican";
  } else if (prosjek >= 3.5) {
    uspjeh = "vrlo dobar";
  } else if (prosjek >= 2.5) {
    uspjeh = "dobar";
  } else if (prosjek >= 1.5) {
    uspjeh = "dovoljan";
  } else {
    uspjeh = "nedovoljan";
  }
  ucenik.uspjeh = `${ucenik.ime} ${ucenik.prezime} je ${uspjeh}.`;
}
// fuckcija za koliko ima kojih ucenika
function statistikaUspjeha(ucenici) {
  const statistika = {
    odlican: 0,
    vrloDobar: 0,
    dobar: 0,
    dovoljan: 0,
    nedovoljan: 0,
  };

  for (let i = 0; i < ucenici.length; i++) {
    const prosjek = izracunajProsjek(ucenici[i]);
    if (prosjek >= 4.5) {
      statistika.odlican++;
    } else if (prosjek >= 3.5) {
      statistika.vrloDobar++;
    } else if (prosjek >= 2.5) {
      statistika.dobar++;
    } else if (prosjek >= 1.5) {
      statistika.dovoljan++;
    } else {
      statistika.nedovoljan++;
    }
  }

  return statistika;
}

function sortirajUcenike(ucenici) {
  for (let i = 0; i < ucenici.length - 1; i++) {
    for (let j = 0; j < ucenici.length - i - 1; j++) {
      if (ucenici[j].prezime.localeCompare(ucenici[j + 1].prezime) > 0) {
        const temp = ucenici[j];
        ucenici[j] = ucenici[j + 1];
        ucenici[j + 1] = temp;
      }
    }
  }
  return ucenici;
}

for (let i = 0; i < ucenici.length; i++) {
  izracunajProsjek(ucenici[i]);
  dodjeliUspjeh(ucenici[i]);
}

const statistika = statistikaUspjeha(ucenici);
const sortiraniUcenici = sortirajUcenike(ucenici);
//ispis svega
console.log("Svi ucenici:");
ucenici.forEach((ucenik) => console.log(ucenik));
console.log("Statistika uspjeha:");
console.log(statistika);
console.log("Sortirani ucenici:");
sortiraniUcenici.forEach((ucenik) => console.log(ucenik));
