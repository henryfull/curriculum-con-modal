class Colaboradores {

    constructor(_firstname,_lastname, _age, _email,_phone,_business,_job,_place,_curriculum){

        this.firstname = _firstname;
        this.lastname = _lastname;
        this.age = _age;
        this.email = _email;
        this.phone = _phone;
        this.business = _business;
        this.job = _job;
        this.place = _place;
        this.curriculum = _curriculum;

        
    }

}
var curriculum1 = [
    ["2019", "2º año de Grado de Superior de Desarrollo de Aplicaciones Web, IES Badia"],
    ["1º año de Grado de Superior de Desarrollo de Aplicaciones Web, IES Badia", "2018"],
    ["2017", "Prueba de acceso a grado superior "],
    ["Trabajando por cuenta propia", "2016"]
];

var curriculum2 = [
    ["2018", "Técnico Informático en BANCO DE ESPAÑA. Madrid. Septiembre 2018 - Actualmente."],
    ["Analista Programador en MAZARS AUDITORES, SLP. Madrid.", "2011 - 2018"],
    ["2010 - 2011", "Desarrollador Web en EVOLUCIONA. "],
    ["Ingeniero en Generación de Energía en TÉCNICAS REUNIDAS, SA.", "2008 - 2010"],
    ["2001 - 2007", "Ingeniero Industrial en la Universidad de Cantabria. "],
    ["Erasmus en la Universidad de Exeter.", "2006 - 2007"]

];

colaborador_1 = new Colaboradores("richard", "hendricks", 37, "richard.hendricks@gmail.com","666666666","el flautista", "CEO","Silicon valley", curriculum1);
colaborador_2 = new Colaboradores("erlich", "bachman", 42, "erlich.bachman@gmail.com","555555555","el flautista", "Busines Angel","Silicon valley", curriculum2); 
colaborador_3 = new Colaboradores("jared", "dunn", 35, "jared.dunn@gmail.com","444444444","el flautista", "Marketing","Silicon valley", curriculum1);
colaborador_4 = new Colaboradores("valley", "dinesh", 36, "valley.dinesh@gmail.com","333333333","el flautista", "Programming","Silicon valley", curriculum2);
colaborador_5 = new Colaboradores("valley", "gilfoyle", 36, "valley.gilfoyle@gmail.com","222222222","el flautista", "Ciber Security","Silicon valley", curriculum1); 

