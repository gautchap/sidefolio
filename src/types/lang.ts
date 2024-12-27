import { z } from "zod";

export const langSchema = z.enum(["fr", "en"]);
