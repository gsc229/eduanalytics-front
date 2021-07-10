export type SchoolIdType = number

export interface SizeType {
  size:number
}

export interface RaceEthnicityType {
  "white": number | null,
  "black": number | null,
  "hispanic": number | null,
  "asian": number | null,
  "aian": number | null,
  "nhpi": number | null,
  "two_or_more": number | null,
  "non_resident_alien": number | null,
  "unknown": number | null,
  "white_non_hispanic": number | null,
  "black_non_hispanic": number | null,
  "asian_pacific_islander": number | null,
  "aian_prior_2009": number | null,
  "hispanic_prior_2009": number | null,
  "unknown_2000": number | null,
  "white_2000": number | null,
  "black_2000": number | null,
  "api_2000": number | null,
  "aian_2000": number | null,
  "hispanic_2000": number | null
}

export interface ProgramPercentageType {
  "agriculture": number,
  "resources": number,
  "architecture": number,
  "ethnic_cultural_gender": number,
  "communication": number,
  "communications_technology": number,
  "computer": number,
  "personal_culinary": number,
  "education": number,
  "engineering": number,
  "engineering_technology": number,
  "language": number
  "family_consumer_science": number,
  "legal": number,
  "english": number,
  "humanities": number,
  "library": number,
  "biological": number,
  "mathematics": number,
  "military": number,
  "multidiscipline": number,
  "parks_recreation_fitness": number,
  "philosophy_religious": number,
  "theology_religious_vocation": number,
  "physical_science": number,
  "science_technology": number,
  "psychology": number,
  "security_law_enforcement": number,
  "public_administration_social_service": number,
  "social_science": number,
  "construction": number,
  "mechanic_repair_technology": number,
  "precision_production":number,
  "transportation":number,
  "visual_performing": number,
  "health": number,
  "business_marketing": number,
  "history": number
}

export interface SchoolType {
  "name": string
  "alias": string | null
  "city": string
  "state":	string
  "zip":	string
  "school_url":	string
  "size": number
  "race_ethnicity": object,
  "program_percentage": object
}