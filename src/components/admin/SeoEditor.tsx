import React from 'react';
import { ImageUploadField } from './ImageUploadField';
import { DebouncedInput, DebouncedTextarea } from './DebouncedInputs';

export function SeoEditor({ seo, onChange }: { seo: any, onChange: (seo: any) => void }) {
  const data = seo || {};

  const handleChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-8">
      <div className="pt-8 border-t border-slate-200 mt-8 space-y-6">
        <h2 className="text-xl font-semibold text-slate-800">SEO Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">SEO Title</label>
            <DebouncedInput type="text" value={data.title || ''} onChange={val => handleChange('title', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Focus Keyword</label>
            <DebouncedInput type="text" value={data.focusKeyword || ''} onChange={val => handleChange('focusKeyword', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Meta Description</label>
            <DebouncedTextarea value={data.metaDescription || ''} onChange={val => handleChange('metaDescription', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" rows={2} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">URL Slug</label>
            <DebouncedInput type="text" value={data.urlSlug || ''} onChange={val => handleChange('urlSlug', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Canonical URL</label>
            <DebouncedInput type="url" value={data.canonicalUrl || ''} onChange={val => handleChange('canonicalUrl', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Robots (Index/NoIndex)</label>
            <select value={data.robots || 'index, follow'} onChange={e => handleChange('robots', e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" id="robots-select-input">
              <option value="index, follow">Index, Follow</option>
              <option value="noindex, follow">NoIndex, Follow</option>
              <option value="index, nofollow">Index, NoFollow</option>
              <option value="noindex, nofollow">NoIndex, NoFollow</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Schema Type</label>
            <DebouncedInput type="text" value={data.schemaType || ''} onChange={val => handleChange('schemaType', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" placeholder="e.g. Article, LocalBusiness" />
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 space-y-6">
        <h2 className="text-xl font-semibold text-slate-800">Open Graph (Facebook, LinkedIn)</h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Open Graph Title</label>
            <DebouncedInput type="text" value={data.openGraphTitle || ''} onChange={val => handleChange('openGraphTitle', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Open Graph Description</label>
            <DebouncedTextarea value={data.openGraphDescription || ''} onChange={val => handleChange('openGraphDescription', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" rows={2} />
          </div>
          <ImageUploadField 
            value={data.openGraphImage || ''} 
            onChange={val => handleChange('openGraphImage', val)} 
            label="Open Graph Image"
            helperText="Appears when links are shared on Facebook, LinkedIn, etc." 
          />
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 space-y-6">
        <h2 className="text-xl font-semibold text-slate-800">Twitter Cards</h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Twitter Title</label>
            <DebouncedInput type="text" value={data.twitterTitle || ''} onChange={val => handleChange('twitterTitle', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Twitter Description</label>
            <DebouncedTextarea value={data.twitterDescription || ''} onChange={val => handleChange('twitterDescription', val)} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" rows={2} />
          </div>
          <ImageUploadField 
            value={data.twitterImage || ''} 
            onChange={val => handleChange('twitterImage', val)} 
            label="Twitter Card Image"
            helperText="Appears when links are shared on Twitter/X" 
          />
        </div>
      </div>
    </div>
  );
}
