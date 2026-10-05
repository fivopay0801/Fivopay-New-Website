import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLanguage } from "@/context/language-context";

const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || phoneRegex.test(val),
      "Please enter a valid phone number"
    ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { t } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      console.log("Form submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast({
        title: t.contact.successMsg,
        description: t.contact.successSub,
        variant: "default",
      });
      form.reset();
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      setError(null);
    } catch (err) {
      toast({
        title: t.contact.errorMsg,
        description: "",
        variant: "destructive",
      });
      setError(t.contact.errorMsg);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider">{t.contact.firstName}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.firstName}
                    {...field}
                    className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider">{t.contact.lastName}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t.contact.lastName}
                    {...field}
                    className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider">{t.contact.email}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t.contact.email}
                  {...field}
                  className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider">{t.contact.phone}</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder={t.contact.phone}
                  {...field}
                  className="bg-background border-none rounded-full h-12 focus-visible:ring-1 focus-visible:ring-white/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs uppercase tracking-wider">{t.contact.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t.contact.messagePlaceholder}
                  className="min-h-[150px] bg-background border-none rounded-[14px] focus-visible:ring-1 focus-visible:ring-white/20 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full h-14 rounded-full bg-gradient-to-b from-white to-[#d1d1d1] text-black font-medium hover:opacity-90 transition-opacity mt-4"
          disabled={form.formState.isSubmitting}
        >
          {t.contact.sendButton}
        </Button>

        {isSuccess && (
          <p className="text-center text-sm text-green-500 mt-2">
            {t.contact.successMsg}
          </p>
        )}
        {error && (
          <p className="text-center text-sm text-red-500 mt-2">
            {error}
          </p>
        )}
      </form>
    </Form>
  );
};

export default ContactForm;
