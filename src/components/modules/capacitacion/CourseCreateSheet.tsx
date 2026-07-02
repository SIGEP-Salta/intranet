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
        <SheetTitle>Crear aplicación</SheetTitle>
        <SheetDescription>Registra una nueva aplicación en el sistema</SheetDescription>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 overflow-y-auto px-4">
        <div className="grid gap-3">
          <Label htmlFor="create-app-name">Nombre</Label>
          <Input
            id="create-app-name"
            value={name}
            onChange={(e) => { setName(e.target.value);}}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="create-app-slug">Slug</Label>
          <Input
            id="create-app-slug"
            value={slug}
            onChange={(e) => { setSlug(e.target.value);}}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="create-app-url">URL</Label>
          <Input
            id="create-app-url"
            value={url}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="create-app-description">Descripción</Label>
          <Input
            id="create-app-description"
            value={description}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="create-app-order">Orden</Label>
          <Input
            id="create-app-order"
            type="number"
            min={0}
            value={order}
          />
        </div>
        <Separator />
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
