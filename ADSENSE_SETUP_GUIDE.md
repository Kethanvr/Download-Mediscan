# Google AdSense Setup Guide for MediScan

## Current Status

✅ ads.txt file is properly set up with your publisher ID: `pub-6985167612880362`
✅ AdSense script is loaded in layout.tsx
✅ Ad components are integrated throughout the app

## Next Steps Required

### 1. Create Ad Units in Google AdSense Dashboard

Go to your [Google AdSense dashboard](https://www.google.com/adsense/) and create the following ad units:

#### Banner Ad (Header/Footer)

- **Name**: MediScan Banner Ad
- **Size**: Responsive or 728x90 (Leaderboard)
- **Type**: Display ads
- **Replace in code**: `1234567890` in `BannerAd.tsx`

#### Square Ad (Sidebar)

- **Name**: MediScan Square Ad
- **Size**: 300x250 (Medium Rectangle)
- **Type**: Display ads
- **Replace in code**: `1234567891` in `SquareAd.tsx`

#### Responsive Ad (Main Content)

- **Name**: MediScan Responsive Ad
- **Size**: Responsive
- **Type**: Display ads
- **Replace in code**: `1234567892` in `ResponsiveAd.tsx`

#### In-Article Ad

- **Name**: MediScan In-Article Ad
- **Size**: Responsive (In-article)
- **Type**: In-article ads
- **Replace in code**: `1234567893` in `InArticleAd.tsx`

### 2. Update Ad Slot IDs

After creating ad units, update the following files with your actual ad slot IDs:

#### File: `src/components/ads/BannerAd.tsx`

```typescript
adSlot = "YOUR_BANNER_AD_SLOT_ID"; // Replace 1234567890
```

#### File: `src/components/ads/SquareAd.tsx`

```typescript
adSlot = "YOUR_SQUARE_AD_SLOT_ID"; // Replace 1234567891
```

#### File: `src/components/ads/ResponsiveAd.tsx`

```typescript
adSlot = "YOUR_RESPONSIVE_AD_SLOT_ID"; // Replace 1234567892
```

#### File: `src/components/ads/InArticleAd.tsx`

```typescript
adSlot = "YOUR_IN_ARTICLE_AD_SLOT_ID"; // Replace 1234567893
```

### 3. Current Ad Placements

Your ads are now placed in the following locations:

**Homepage (`src/app/page.tsx`):**

- Banner ad after HeaderSection
- Responsive ad after FeaturesSection
- Square ad after GoldMembershipSection
- Responsive ad after RuralHealthcareSection
- Banner ad after TestimonialsSection

**Media Page (`src/app/media/page.tsx`):**

- Banner ad after page title
- Responsive ad before image gallery

**Features Section (`src/components/sections/FeaturesSection.tsx`):**

- In-article ad after description text

### 4. Auto Ads

Auto ads are enabled via the `AutoAds` component in your layout.tsx. This should automatically place ads throughout your site.

### 5. Testing Your Ads

1. **Wait 24-48 hours** after creating ad units for them to become active
2. **Test in incognito mode** to avoid your own clicks affecting ad performance
3. **Check browser console** for any AdSense errors
4. **Use AdSense's URL inspection tool** to verify your site is properly crawled

### 6. Ad Revenue Optimization Tips

1. **Place ads above the fold** - Users should see ads without scrolling
2. **Use responsive ad units** - They perform better on mobile devices
3. **Monitor ad placement reports** in AdSense dashboard
4. **Experiment with different ad sizes** and placements
5. **Ensure fast page load times** - Slow sites hurt ad performance

### 7. Troubleshooting

If ads still don't show after 48 hours:

1. **Check AdSense approval status** - Ensure your site is fully approved
2. **Verify ad units are active** in AdSense dashboard
3. **Check for ad blockers** during testing
4. **Review Google's ad policies** to ensure compliance
5. **Use AdSense's troubleshooting tools**

### 8. Performance Monitoring

Monitor these metrics in your AdSense dashboard:

- **Page RPM** (Revenue per 1000 pageviews)
- **Ad CTR** (Click-through rate)
- **Coverage** (% of ad requests filled)
- **Page views** and **impressions**

## Support

If you need help:

1. Check [Google AdSense Help Center](https://support.google.com/adsense/)
2. Use [AdSense Community Forum](https://support.google.com/adsense/community)
3. Contact AdSense support through your dashboard

## Important Notes

- **Never click your own ads** - This violates AdSense policies
- **Don't encourage clicks** with text like "Click here" near ads
- **Ensure mobile-friendly design** - Most traffic is mobile
- **Keep content high-quality** - Better content = better ad performance
