import { z } from "zod";

export const userFormSchema = z.object({
  firstName: z.string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom ne doit contenir que des lettres"),
  lastName: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom ne doit contenir que des lettres"),
  phone: z.string(),
  email: z.string()
    .email("Format d'email invalide"),
  address: z.string()
    .min(5, "L'adresse doit contenir au moins 5 caractères"),
  country: z.string(),
  zipCode: z.string(),
});

export type UserFormData = z.infer<typeof userFormSchema>;

export const countries = [
  "France", "Belgique", "Suisse", "Canada", "Luxembourg", "Monaco", 
  "Allemagne", "Espagne", "Italie", "Royaume-Uni", "Pays-Bas", 
  "Portugal", "Irlande", "Autriche", "Danemark", "Suède", "Norvège", 
  "Finlande", "Grèce", "Pologne", "République tchèque", "Hongrie", 
  "Roumanie", "Bulgarie", "Croatie", "Slovénie", "Slovaquie", 
  "Estonie", "Lettonie", "Lituanie", "Malte", "Chypre", "Maroc", 
  "Tunisie", "Algérie", "Sénégal", "Côte d'Ivoire", "Mali", 
  "Burkina Faso", "Cameroun", "Congo", "Madagascar", "Maurice",
  "États-Unis", "Mexique", "Brésil", "Argentine", "Chili", 
  "Colombie", "Pérou", "Venezuela", "Japon", "Chine", "Corée du Sud",
  "Inde", "Australie", "Nouvelle-Zélande"
];