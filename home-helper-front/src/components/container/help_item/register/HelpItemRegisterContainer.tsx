import { HelpItemRegisterPresenter } from "@components/presenter/help_item/register/HelpItemRegisterPresenter";
import { useState } from "react";

export const HelpItemRegisterContainer = () => {
  const [registerForm, setRegisterForm] = useState<HelpItemRegisterForm>();

  return <HelpItemRegisterPresenter />;
};

export type HelpItemRegisterForm = {};
