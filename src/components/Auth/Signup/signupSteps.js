import PersonalInfo from "./PersonalInfo"
import Organization from "./Organization"
import Security from "./Security"

export const signupSteps = [
  {
    id: "personal",
    label: "Personal Info",
    component: PersonalInfo,
    fields: ["firstName", "lastName", "email", "phone"]
  },
  {
    id: "organization",
    label: "Organization",
    component: Organization,
    fields: [
      "organizationName",
      "organizationType",
      "signupFor",
      "jobTitle",
      "department",
      "employees",
      "country"
    ]
  },
  {
    id: "security",
    label: "Security",
    component: Security,
    fields: ["password", "confirmPassword", "terms", "ndpr"]
  }
]