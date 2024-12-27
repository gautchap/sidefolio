"use server";

import { cookies } from "next/headers";
import { actionClient } from "@/lib/safe-action";
import { langSchema } from "@/types/lang";

export const switchLang = actionClient.schema(langSchema).action(async ({ parsedInput: locale }) => {
    const cookieStore = await cookies();
    cookieStore.set("NEXT_LOCALE", locale);
});
