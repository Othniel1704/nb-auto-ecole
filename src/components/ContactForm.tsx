"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';


const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }).max(50),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  phone: z.string().optional(),
  courseInterest: z.string().optional(),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }).max(500),
});

const courses = [
  "Permis B (Boîte Manuelle)",
  "Permis B (Boîte Automatique)",
  "Conduite Accompagnée (AAC)",
  "Conduite Supervisée",
  "Formation Code de la Route",
  "Autre (préciser dans le message)",
];

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get('course');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      courseInterest: initialCourse || "",
      message: "",
    },
  });

 useEffect(() => {
    if (initialCourse) {
      form.setValue('courseInterest', initialCourse);
    }
  }, [initialCourse, form]);


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message.');
      }

      toast({
        title: "Message envoyé !",
        description: result.message || "Nous avons bien reçu votre message et reviendrons vers vous rapidement.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Erreur d'envoi",
        description: (error as Error).message || "Une erreur s'est produite lors de l'envoi de votre message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-6 md:p-8 rounded-lg shadow-xl">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom complet</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom et prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse e-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="votre.email@example.com" {...field} />
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
              <FormLabel>Numéro de téléphone (Facultatif)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="06 12 34 56 78" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="courseInterest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Formation souhaitée (Facultatif)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une formation" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {courses.map(course => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre message / Demande d&apos;inscription</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Écrivez votre message ici..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                N&apos;hésitez pas à détailler votre demande ou à poser vos questions.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </Button>
      </form>
    </Form>
  );
}
