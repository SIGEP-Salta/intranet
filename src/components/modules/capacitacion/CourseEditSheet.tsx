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
  app: App;
  onClose: () => void;
  onAppUpdated: () => void;
};

export default function CourseEditSheet({ app, onClose, onAppUpdated }: Props) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(false);
  const [isDefault, setIsDefault] = useState(false);
  const [order, setOrder] = useState("");
  const [saving, setSaving] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    setName(typeof app.name === "string" ? app.name : "");
    setSlug(typeof app.slug === "string" ? app.slug : "");
    setUrl(typeof app.url === "string" ? app.url : "");
    setDescription(typeof app.description === "string" ? app.description : "");
    setActive(Boolean(app.active));
    setIsDefault(Boolean(app.is_default));
    setOrder(typeof app.position === "number" ? String(app.position) : "");
    setFieldErrors({});
  }, [app]);

  const clearError = (field: string) =>
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));

  const handleSave = async () => {
    setSaving(true);
    setFieldErrors({});
    try {
      const res = await fetch(`/api/apps/${app.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, slug, url, description, active, is_default: isDefault, position: order === "" ? null : Number(order) }),
      });

      if (res.status === 422) {
        setFieldErrors(await parseLaravel422(res));
        return;
      }

      if (!res.ok) throw new Error("Error al guardar");

      onAppUpdated();
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <SheetHeader>
        <SheetTitle>{app.name || app.slug || "Sin nombre"}</SheetTitle>
        <SheetDescription>{app.description || "Sin descripción"}</SheetDescription>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 overflow-y-auto px-4">
        <div className="grid gap-3">
          <Label htmlFor="app-name">Nombre</Label>
          <Input
            id="app-name"
            value={name}
            onChange={(e) => { setName(e.target.value); clearError("name"); }}
            aria-invalid={!!fieldErrors.name}
          />
          {fieldErrors.name && (
            <p className="text-sm text-destructive">{fieldErrors.name}</p>
          )}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="app-slug">Slug</Label>
          <Input
            id="app-slug"
            value={slug}
            onChange={(e) => { setSlug(e.target.value); clearError("slug"); }}
            aria-invalid={!!fieldErrors.slug}
          />
          {fieldErrors.slug && (
            <p className="text-sm text-destructive">{fieldErrors.slug}</p>
          )}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="app-url">URL</Label>
          <Input
            id="app-url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); clearError("url"); }}
            aria-invalid={!!fieldErrors.url}
          />
          {fieldErrors.url && (
            <p className="text-sm text-destructive">{fieldErrors.url}</p>
          )}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="app-description">Descripción</Label>
          <Input
            id="app-description"
            value={description}
            onChange={(e) => { setDescription(e.target.value); clearError("description"); }}
            aria-invalid={!!fieldErrors.description}
          />
          {fieldErrors.description && (
            <p className="text-sm text-destructive">{fieldErrors.description}</p>
          )}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="app-order">Orden</Label>
          <Input
            id="app-order"
            type="number"
            min={0}
            value={order}
            onChange={(e) => { setOrder(e.target.value); clearError("position"); }}
            aria-invalid={!!fieldErrors.position}
          />
          {fieldErrors.position && (
            <p className="text-sm text-destructive">{fieldErrors.position}</p>
          )}
        </div>
        <Separator />
        <FieldGroup className="w-full max-w-sm">
          <FieldLabel htmlFor="switch-active">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>App activa</FieldTitle>
                <FieldDescription>Habilita/Inhabilita la aplicación</FieldDescription>
              </FieldContent>
              <Switch
                id="switch-active"
                checked={active}
                onCheckedChange={setActive}
              />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="switch-default">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>App por defecto</FieldTitle>
                <FieldDescription>Aparece asignada a los usuarios por defecto</FieldDescription>
              </FieldContent>
              <Switch
                id="switch-default"
                checked={isDefault}
                onCheckedChange={setIsDefault}
              />
            </Field>
          </FieldLabel>
        </FieldGroup>
      </div>
      <SheetFooter>
        <Button type="button" onClick={handleSave} disabled={saving}>
          {saving ? "Guardando..." : "Guardar cambios"}
        </Button>
        <SheetClose asChild>
          <Button variant="outline">Cancelar</Button>
        </SheetClose>
      </SheetFooter>
    </>
  );
}
