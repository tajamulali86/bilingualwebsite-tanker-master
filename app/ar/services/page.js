import Features from '@/app/component/feature'
import Review from '@/app/component/testimonial'
import React from 'react'

export default function ServicePage() {
  return (
    <div>
        <h1 className='text-white text-5xl'>صفحة الخدمات
</h1>
<Features ar={true}/>
<Review ar={true} />

    </div>
  )
}
