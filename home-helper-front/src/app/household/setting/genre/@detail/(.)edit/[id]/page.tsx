/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { BackModal } from "@components/ui";
import { GenreDetail } from "@app/household/setting/genre/GenreDetail";

const Page = ({ params: { id } }: { params: { id: string } }) => (
  <BackModal>
    <GenreDetail genreId={id} />
  </BackModal>
);

export default Page;
