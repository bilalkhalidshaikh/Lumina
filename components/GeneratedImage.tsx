import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface GeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
}

export const GeneratedImage: React.FC<GeneratedImageProps> = ({ 
  prompt, 
  alt, 
  className = "", 
  fallbackSrc = "https://picsum.photos/seed/lumina/800/600",
  aspectRatio = "aspect-video"
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      // Check if we have a cached version in session storage to save API calls during demo
      const cacheKey = `lumina_img_${prompt.substring(0, 20)}`;
      const cached = sessionStorage.getItem(cacheKey);
      
      if (cached) {
        setImageSrc(cached);
        setLoading(false);
        return;
      }

      try {
        const generated = await generateImage(prompt);
        if (isMounted) {
          if (generated) {
            setImageSrc(generated);
            try {
              sessionStorage.setItem(cacheKey, generated);
            } catch (e) {
              // Quota exceeded or storage full, ignore
            }
          } else {
            setError(true);
          }
        }
      } catch (err) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`bg-slate-800 animate-pulse flex flex-col items-center justify-center text-slate-500 ${aspectRatio} ${className}`}>
        <Loader2 className="w-8 h-8 animate-spin mb-2" />
        <span className="text-xs font-mono">Generating AI Image...</span>
        <span className="text-[10px] text-slate-600 max-w-[80%] text-center truncate px-4">{prompt}</span>
      </div>
    );
  }

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <img 
        src={error || !imageSrc ? fallbackSrc : imageSrc} 
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${aspectRatio}`}
      />
      
      {!error && imageSrc && (
        <div className="absolute top-3 left-3">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-white/20"
          >
            <Sparkles className="w-3 h-3 text-lumina-400" />
            <span>AI Generated</span>
          </motion.div>
        </div>
      )}

      {error && (
        <div className="absolute top-3 right-3">
           <div className="bg-red-500/80 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full border border-white/20">
             Fallback Image
           </div>
        </div>
      )}
    </div>
  );
};