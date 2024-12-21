import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from 'react-hook-form';
import { UserFormData, countries } from './types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddressStepProps {
  form: UseFormReturn<UserFormData>;
}

const AddressStep = ({ form }: AddressStepProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700 font-medium">Adresse</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="bg-white border-gray-300 focus:border-[#700100] focus:ring-[#700100] text-gray-900"
                placeholder="Entrez votre adresse"
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="text-gray-700 font-medium">Pays</FormLabel>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <button
                    className={cn(
                      "w-full flex h-10 items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#700100] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? countries.find(
                          (country) => country === field.value
                        )
                      : "Sélectionnez un pays"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0">
                <Command>
                  <CommandInput placeholder="Rechercher un pays..." className="h-9" />
                  <CommandEmpty>Aucun pays trouvé.</CommandEmpty>
                  <CommandGroup className="max-h-[300px] overflow-auto">
                    {countries.map((country) => (
                      <CommandItem
                        value={country}
                        key={country}
                        onSelect={() => {
                          form.setValue("country", country);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            country === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {country}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="zipCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700 font-medium">Code Postal</FormLabel>
            <FormControl>
              <Input
                {...field}
                className="bg-white border-gray-300 focus:border-[#700100] focus:ring-[#700100] text-gray-900"
                placeholder="Entrez votre code postal"
              />
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
    </>
  );
};

export default AddressStep;