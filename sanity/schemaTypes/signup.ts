
import { Rule } from '@sanity/types'; 

export default {
  name: "signup",
  title: "Sign Up",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(8).max(128),
    },
    {
      name: "confirmPassword",
      title: "Confirm Password",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(8).max(128),
    },
    {
      name: "termsAccepted",
      title: "Terms and Conditions Accepted",
      type: "boolean",
      validation: (Rule: Rule) => Rule.required().error('You must accept the terms and conditions to sign up.'),
    },
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "email",
    },
  },
};
