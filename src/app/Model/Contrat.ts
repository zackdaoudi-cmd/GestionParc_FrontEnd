import {Vehicule} from 'src/app/Model/Vehicule';

export class Contrat{

    idContrat : Number ; 
    reference : String ;
    libelleContrat : String ; 
    vehicule : Vehicule;
    startDate :Date; 
    endDate : Date;
    agreementPicturesData :string ;
    cost : Number ;
    comment : String
   

}