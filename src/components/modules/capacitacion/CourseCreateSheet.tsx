"use client";

import Switch from "@/components/Switch";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
//import { FieldErrors, parseLaravel422 } from "@/lib/api-errors";


type Props = {
  onCreated: () => void;
};

export default function AppCreateSheet({ onCreated }: Props) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [order, setOrder] = useState("");
  const [saving, setSaving] = useState(false);

  

  const handleCreate = async () => {
    setSaving(true);
  
    try {
      const res = await fetch("/api/apps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug, url, description, is_default: isDefault, position: order === "" ? null : Number(order) }),
      });

  
      if (!res.ok) throw new Error("Error al crear");

      onCreated();
    } finally {
      setSaving(false);
    }
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Crear capacitacion</SheetTitle>
        <SheetDescription>Registra una nueva capacitacion</SheetDescription>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 overflow-y-auto px-4">
      </div>
      <SheetFooter>
        <Button type="button" onClick={handleCreate} disabled={saving}>
          {saving ? "Creando..." : "Crear aplicación"}
        </Button>
        <SheetClose asChild>
          <Button variant="outline">Cancelar</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
