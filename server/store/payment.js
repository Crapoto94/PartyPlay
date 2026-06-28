// =====================================================================
//  Configuration des paiements (PayPal + SumUp).
//  Les identifiants viennent de VARIABLES D'ENVIRONNEMENT (jamais commités) :
//
//    PAYMENT_CURRENCY     devise (def. EUR)
//    PAYPAL_RECEIVER      e-mail du compte PayPal qui encaisse (ex. marc@fbc.fr)
//    PAYPAL_MODE          'live' | 'sandbox' (def. live)
//    PAYPAL_CLIENT_ID     identifiant de l'app REST PayPal (pour l'API/webhook)
//    PAYPAL_SECRET        secret de l'app REST PayPal
//
//    SUMUP_MERCHANT_CODE  code marchand SumUp (ex. MXXXXXXX)
//    SUMUP_CLIENT_ID      client_id de l'app SumUp (OAuth)
//    SUMUP_CLIENT_SECRET  client_secret de l'app SumUp
//    SUMUP_API_KEY        clé API SumUp (alternative à l'OAuth)
//
//  Tant que ces variables ne sont pas fournies, le paiement est « non
//  configuré » : la création de fête reste LIBRE (cf. décision produit) et le
//  déblocage se fait à la main par le super-admin.
// =====================================================================

const E = process.env;

export function paymentConfig() {
  return {
    currency: E.PAYMENT_CURRENCY || 'EUR',
    paypal: {
      receiver: E.PAYPAL_RECEIVER || '',
      mode: E.PAYPAL_MODE || 'live',
      clientId: E.PAYPAL_CLIENT_ID || '',
      configured: !!(E.PAYPAL_CLIENT_ID && E.PAYPAL_SECRET) || !!E.PAYPAL_RECEIVER,
    },
    sumup: {
      merchantCode: E.SUMUP_MERCHANT_CODE || '',
      configured: !!(E.SUMUP_MERCHANT_CODE && (E.SUMUP_API_KEY || (E.SUMUP_CLIENT_ID && E.SUMUP_CLIENT_SECRET))),
    },
  };
}

export function paypalEnabled() { return !!paymentConfig().paypal.receiver; }

// Lien de paiement PayPal « Buy Now » (PayPal Standard, sans API) : pré-rempli
// vers l'e-mail receiver avec le montant. Vide si non configuré.
export function paypalLink({ label, price, currency }) {
  const c = paymentConfig();
  if (!c.paypal.receiver || !price) return '';
  const params = new URLSearchParams({
    cmd: '_xclick',
    business: c.paypal.receiver,
    item_name: 'PartyPlay — ' + (label || 'Fête'),
    amount: Number(price).toFixed(2),
    currency_code: currency || c.currency || 'EUR',
    no_shipping: '1',
  });
  return 'https://www.paypal.com/cgi-bin/webscr?' + params.toString();
}

// Données publiques exposables au front (jamais le secret).
export function publicPaymentConfig() {
  const c = paymentConfig();
  return {
    currency: c.currency,
    paypal: { enabled: c.paypal.configured, clientId: c.paypal.clientId },
    sumup: { enabled: c.sumup.configured },
    anyEnabled: c.paypal.configured || c.sumup.configured,
  };
}
