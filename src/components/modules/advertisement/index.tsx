"use client";

import NSButton from "@/components/ui/core/NSButton";
import NSInput from "@/components/ui/core/NSInput";
import Image from "next/image";
import { useState } from "react";

const AddAdvertisementForm = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <form className="space-y-4 p-6 bg-white rounded-xl">
      <div className=" mb-6">
        <h2 className="font-bold text-sm md:text-base text-ns-title">
          Add Advertisement
        </h2>
      </div>
      <div>
        <label className="block font-semibold mb-1 text-ns-neutral-dark">
          Attach link
        </label>
        <NSInput
          type="text"
          placeholder="https://example.com"
          className="w-full"
          required
        />
      </div>
      <div>
        <label className="block font-semibold text-ns-neutral-dark mb-1">
          Duration
        </label>
        <NSInput
          type="text"
          placeholder="30 days"
          className="w-full"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1 text-ns-neutral-dark">
          Upload photo’s
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border px-3 py-2 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 rounded-md"
        />
        {preview && (
          <Image
            src={preview}
            alt="Preview"
            width={300}
            height={200}
            className="mt-3"
          />
        )}
      </div>
      <NSButton
        type="submit"
        className=" rounded-lg bg-ns-primary text-white px-4 py-3 hover:bg-ns-primary-dark transition-colors mt-3"
      >
        Save Changes
      </NSButton>
    </form>
  );
};

export default AddAdvertisementForm;
