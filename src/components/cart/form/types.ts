import { z } from "zod";

export const userFormSchema = z.object({
  firstName: z.string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom ne doit contenir que des lettres"),
  lastName: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom ne doit contenir que des lettres"),
  phone: z.string()
    .min(1, "Le numéro de téléphone est requis"),
  email: z.string()
    .email("Format d'email invalide")
    .min(5, "Email invalide"),
  address: z.string()
    .min(5, "L'adresse doit contenir au moins 5 caractères"),
  country: z.string()
    .min(2, "Le pays est requis"),
  zipCode: z.string()
    .min(1, "Le code postal est requis"),
});

export type UserFormData = z.infer<typeof userFormSchema>;

export const countries = [
  "Afghanistan", "Afrique du Sud", "Albanie", "Algérie", "Allemagne", "Andorre", "Angola", 
  "Antigua-et-Barbuda", "Arabie Saoudite", "Argentine", "Arménie", "Australie", "Autriche", 
  "Azerbaïdjan", "Bahamas", "Bahreïn", "Bangladesh", "Barbade", "Belgique", "Belize", "Bénin", 
  "Bhoutan", "Biélorussie", "Birmanie", "Bolivie", "Bosnie-Herzégovine", "Botswana", "Brésil", 
  "Brunei", "Bulgarie", "Burkina Faso", "Burundi", "Cambodge", "Cameroun", "Canada", "Cap-Vert", 
  "Chili", "Chine", "Chypre", "Colombie", "Comores", "Congo", "Corée du Nord", "Corée du Sud", 
  "Costa Rica", "Côte d'Ivoire", "Croatie", "Cuba", "Danemark", "Djibouti", "Dominique", "Égypte", 
  "Émirats arabes unis", "Équateur", "Érythrée", "Espagne", "Estonie", "États-Unis", "Éthiopie", 
  "Fidji", "Finlande", "France", "Gabon", "Gambie", "Géorgie", "Ghana", "Grèce", "Grenade", 
  "Guatemala", "Guinée", "Guinée-Bissau", "Guinée équatoriale", "Guyana", "Haïti", "Honduras", 
  "Hongrie", "Îles Marshall", "Îles Salomon", "Inde", "Indonésie", "Irak", "Iran", "Irlande", 
  "Islande", "Israël", "Italie", "Jamaïque", "Japon", "Jordanie", "Kazakhstan", "Kenya", 
  "Kirghizistan", "Kiribati", "Koweït", "Laos", "Lesotho", "Lettonie", "Liban", "Liberia", 
  "Libye", "Liechtenstein", "Lituanie", "Luxembourg", "Macédoine", "Madagascar", "Malaisie", 
  "Malawi", "Maldives", "Mali", "Malte", "Maroc", "Maurice", "Mauritanie", "Mexique", "Micronésie", 
  "Moldavie", "Monaco", "Mongolie", "Monténégro", "Mozambique", "Namibie", "Nauru", "Népal", 
  "Nicaragua", "Niger", "Nigeria", "Norvège", "Nouvelle-Zélande", "Oman", "Ouganda", "Ouzbékistan", 
  "Pakistan", "Palaos", "Palestine", "Panama", "Papouasie-Nouvelle-Guinée", "Paraguay", "Pays-Bas", 
  "Pérou", "Philippines", "Pologne", "Portugal", "Qatar", "République centrafricaine", 
  "République démocratique du Congo", "République dominicaine", "République tchèque", "Roumanie", 
  "Royaume-Uni", "Russie", "Rwanda", "Saint-Kitts-et-Nevis", "Saint-Marin", "Saint-Vincent-et-les-Grenadines", 
  "Sainte-Lucie", "Salvador", "Samoa", "Sao Tomé-et-Principe", "Sénégal", "Serbie", "Seychelles", 
  "Sierra Leone", "Singapour", "Slovaquie", "Slovénie", "Somalie", "Soudan", "Soudan du Sud", 
  "Sri Lanka", "Suède", "Suisse", "Suriname", "Swaziland", "Syrie", "Tadjikistan", "Tanzanie", 
  "Tchad", "Thaïlande", "Timor oriental", "Togo", "Tonga", "Trinité-et-Tobago", "Tunisie", 
  "Turkménistan", "Turquie", "Tuvalu", "Ukraine", "Uruguay", "Vanuatu", "Vatican", "Venezuela", 
  "Viêt Nam", "Yémen", "Zambie", "Zimbabwe"
];