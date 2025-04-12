export const formatPrice = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    .format(value)
    .replace('$', '$ '); 
  };

 export  const formatLargeNumber = (num) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)} trillion`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)} billion`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)} million`;
    return `$${num.toFixed(2)}`;
  };