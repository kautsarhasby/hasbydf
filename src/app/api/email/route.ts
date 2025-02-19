import { formSchema } from "@/lib/types/schema";

export const sendEmail = async (prevState: unknown, formData: FormData) => {
  const validatedSchema = formSchema.safeParse(Object.fromEntries(formData));
  if (!validatedSchema.success) {
    return {
      error: validatedSchema.error.flatten().fieldErrors,
    };
  }
  console.log(validatedSchema.data);
};
