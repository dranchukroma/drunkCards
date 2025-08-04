import { type ReactNode } from "react";
import AddHomeAndroid from "@components/Icons/DownloadPWA/AddHomeAndroid";
import AddHomeIos from "@components/Icons/DownloadPWA/AddHomeIos";
import Copy from "@components/Icons/DownloadPWA/Copy";
import Google from "@components/Icons/DownloadPWA/Google";
import Paste from "@components/Icons/DownloadPWA/Paste";
import Plus from "@components/Icons/DownloadPWA/Plus";
import Safari from "@components/Icons/DownloadPWA/Safari";
import Share from "@components/Icons/DownloadPWA/Share";
import ThreeDotsMenu from "@components/Icons/DownloadPWA/ThreeDotsMenu";
import { copyCurrentUrl } from "shared/utils/copyUrl";
import type { PwaTranslationStructure } from "i18n/types";

export type InstructionStep = {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
};

export const stepsInstruction = (copy: PwaTranslationStructure) => {
  return {
    iOS: {
      NotSafari: [
        {
          title: copy.iOS.NotSafari[0],
          icon: <Copy />,
          onClick: copyCurrentUrl,
        },
        {
          title: copy.iOS.NotSafari[1],
          icon: <Safari />,
        },
        {
          title: copy.iOS.NotSafari[2],
          icon: <Paste />,
        },
      ],
      Safari: [
        {
          title: copy.iOS.Safari[0],
          icon: <Share />,
        },
        {
          title: copy.iOS.Safari[1],
          icon: <AddHomeIos />,
        },
        {
          title: copy.iOS.Safari[2],
          icon: <Plus />,
        },
      ],
    },
    Android: {
      Supported: [
        {
          title: copy.Android.Supported[0],
          icon: <ThreeDotsMenu />,
        },
        {
          title: copy.Android.Supported[1],
          icon: <AddHomeAndroid />,
        },
        {
          title: copy.Android.Supported[2],
          icon: <Plus />,
        },
      ],
      notSupported: [
        {
          title: copy.Android.notSupported[0],
          icon: <Copy />,
          onClick: copyCurrentUrl,
        },
        {
          title: copy.Android.notSupported[1],
          icon: <Google />,
        },
        {
          title: copy.Android.notSupported[2],
          icon: <Paste />,
        },
      ],
    },
  };
}
