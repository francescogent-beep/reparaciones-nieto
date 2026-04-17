'use client';

import React from 'react';
import { Share2 } from 'lucide-react';

interface NativeShareButtonProps {
  title: string;
  url: string;
}

export const NativeShareButton = ({ title, url }: NativeShareButtonProps) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
      aria-label={copied ? 'Enlace copiado' : 'Compartir este articulo'}
      title={copied ? 'Enlace copiado' : 'Compartir'}
    >
      <Share2 className="w-5 h-5" />
    </button>
  );
};
