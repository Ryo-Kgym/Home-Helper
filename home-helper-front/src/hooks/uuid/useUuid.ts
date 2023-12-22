/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ulid } from "ulid";

export const useUuid = () => {
  return { get: ulid };
};
