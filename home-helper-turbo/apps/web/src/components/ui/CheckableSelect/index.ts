/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode } from "react";

export { MantineCheckableSelect as CheckableSelect } from "./MantineCheckableSelect";

export type CheckableSelectProps<T extends { id: string }> = {
  values: T[];
  setValues: (value: T[]) => void;
  data: T[];
  converter: (t: T) => ReactNode | ReactNode[];
};
