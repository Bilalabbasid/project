<template>
  <div class="pricing-table">
    <div class="pricing-header">
      <h2>Choose Your Plan</h2>
      <p>Unlock your full potential with our comprehensive training platform</p>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>Loading pricing plans...</p>
    </div>

    <!-- Plans from Memberstack -->
    <div v-else class="pricing-cards">
      <div
        v-for="(plan, index) in plans"
        :key="plan.id"
        class="pricing-card"
        :class="{ featured: index === 1 }"
      >
        <div v-if="index === 1" class="recommended-badge">Recommended</div>

        <div class="plan-header">
          <h3>{{ plan.name }}</h3>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">{{
              plan.prices && plan.prices[0]?.amount
                ? plan.prices[0].amount
                : "0"
            }}</span>
            <span
              class="period"
              v-if="plan.prices && plan.prices[0]?.type === 'RECURRING'"
            >
              /{{
                plan.prices[0].interval?.type
                  ?.toLowerCase()
                  .replace("ly", "") || "month"
              }}
            </span>
            <span
              class="period"
              v-else-if="plan.prices && plan.prices[0]?.type === 'ONETIME'"
            >
              one-time
            </span>
          </div>
          <div
            v-if="plan.prices && plan.prices[0]?.interval?.type === 'YEARLY'"
            class="savings"
          >
            Best Value
          </div>
        </div>

        <ul class="features">
          <li v-if="plan.description">
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            {{ plan.description }}
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Access to all Interview Prep content
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Access to all Project Challenges
          </li>
          <li>
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Premium support
          </li>
          <li v-if="plan.id.includes('lifetime')">
            <svg class="check-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            Lifetime access guarantee
          </li>
        </ul>

        <div style="display: flex; gap: 8px; flex-direction: column">
          <button
            type="button"
            class="btn plan-button"
            :class="{ 'featured-button': index === 1 }"
            :data-ms-action="'add-price'"
            :data-ms-price-id="plan.prices && plan.prices[0]?.id"
            @click="handlePlanClick(plan)"
          >
            {{ plan.type === "FREE" ? "Get Started Free" : "Get Started" }}
          </button>

          <button
            type="button"
            class="btn"
            style="
              background: transparent;
              border: 1px solid #374151;
              color: #cbd5e1;
              padding: 8px;
            "
            @click.prevent="inspectPlan(plan)"
            title="Fetch full plan from Memberstack for debugging"
          >
            Inspect plan
          </button>
        </div>
      </div>
    </div>

    <div class="pricing-footer">
      <p>Includes access to all Interview Prep & Project Challenges</p>
      <p>30-day money-back guarantee on all plans</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import memberstackDOM from "@memberstack/dom";
import { useToast } from "@/composables/useToast";

const { showToast } = useToast();
const plans = ref([]);
const loading = ref(true);
let memberstack;
const debugOutput = ref(null);

onMounted(async () => {
  try {
    memberstack = await memberstackDOM.init({
      publicKey: import.meta.env.VITE_MEMBERSTACK_PUBLIC_KEY,
      useCookies: true,
    });

    // Debug: surface memberstack instance and available methods
    console.log("Memberstack instance:", memberstack);
    try {
      console.log("Available memberstack methods:", Object.keys(memberstack));
    } catch (e) {
      console.log("Could not list memberstack methods", e);
    }

    // Fetch all plans from Memberstack
    const response = await memberstack.getPlans();
    plans.value = response.data;
    loading.value = false;

    console.log("Available plans:", plans.value);
    console.log("First plan details:", plans.value[0]);
    // Expose plans briefly for debugging
    debugOutput.value = { plans: plans.value };
  } catch (err) {
    console.error("Failed to load plans:", err);
    showToast("Failed to load pricing plans", "error");
    loading.value = false;
  }
});

// Debug helper: fetch full plan from Memberstack and show response
const inspectPlan = async (plan) => {
  try {
    if (!memberstack) {
      console.warn("Memberstack not ready for inspectPlan");
      return;
    }
    console.log("Calling memberstack.getPlan for:", plan.id);
    const full = await memberstack.getPlan({ planId: plan.id });
    console.log("memberstack.getPlan response:", full);
    debugOutput.value = { inspect: full };
    return full;
  } catch (e) {
    console.error("inspectPlan failed:", e);
    debugOutput.value = { inspectError: e };
  }
};

// Helper: DOM fallback that programmatically clicks a temp element with Memberstack attributes
const triggerDomCheckout = (priceId) => {
  try {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.style.display = "none";
    btn.setAttribute("data-ms-action", "add-price");
    btn.setAttribute("data-ms-price-id", priceId);
    document.body.appendChild(btn);
    btn.click();
    setTimeout(() => btn.remove(), 1000);
    console.log("Triggered DOM checkout fallback for priceId:", priceId);
    return true;
  } catch (e) {
    console.error("DOM checkout fallback failed:", e);
    return false;
  }
};

// Handle plan purchase (Memberstack v2) with multiple fallbacks
const handlePlanClick = async (plan) => {
  console.log("handlePlanClick invoked for plan:", plan && plan.id);
  try {
    if (!memberstack) {
      showToast("Memberstack is loading...", "info");
      console.warn("Memberstack instance not ready yet");
      return;
    }

    // Check if user is logged in
    let member;
    try {
      member = await memberstack.getCurrentMember();
    } catch (e) {
      console.warn("getCurrentMember failed, continuing:", e);
    }

    if (!member?.data) {
      showToast("Please log in or sign up first.", "info");
      console.log("Member not logged in — open login/signup first");
      return;
    }

    // planId — Memberstack v2 expects planId
    const planId = plan.id;
    if (!planId) {
      showToast("Plan does not have a valid planId", "error");
      console.error("Invalid plan id", plan);
      return;
    }

    // Check if member already has this plan (and it's active/paid)
    const memberPlans = (member.data && member.data.planConnections) || [];
    const hasActivePlan = memberPlans.some(
      (pc) => pc.planId === planId && pc.status === "ACTIVE"
    );

    if (hasActivePlan) {
      showToast("You already have this plan!", "info");
      return;
    }

    // Get the price ID
    const firstPrice = plan.prices && plan.prices[0];
    console.log("Full first price object:", firstPrice);

    if (!firstPrice) {
      showToast("This plan has no pricing information", "error");
      return;
    }

    const priceId = firstPrice.id;
    if (!priceId) {
      showToast("This plan has no valid price id", "error");
      console.error("Missing price id on plan price object", firstPrice);
      return;
    }

    console.log("Starting checkout for priceId:", priceId);

    // 1) Preferred: follow Memberstack docs flow using singular `priceId`
    if (typeof memberstack.purchasePlansWithCheckout === "function") {
      try {
        // If not logged in, open the SIGNUP modal and pass the priceId so signup can continue to checkout
        if (!member?.data) {
          console.log(
            "Member not logged in — opening SIGNUP modal with priceId",
            priceId
          );
          if (typeof memberstack.openModal === "function") {
            await memberstack.openModal("SIGNUP", { priceId });
          } else {
            showToast("Please sign up or log in to continue.", "info");
          }
          return;
        }

        const checkout = await memberstack.purchasePlansWithCheckout({
          priceId,
          successUrl: window.location.origin + "/dashboard",
          cancelUrl: window.location.origin + "/pricing",
          configuration: {
            subscription_cancel: { enabled: true },
          },
        });

        console.log("purchasePlansWithCheckout response:", checkout);
        if (checkout && checkout.url) {
          // Redirect user to the hosted checkout
          window.location.href = checkout.url;
          return;
        }

        showToast("Couldn't start checkout. Please try again.", "error");
      } catch (e) {
        console.error("purchasePlansWithCheckout failed:", e);
        try {
          console.error(
            "purchasePlansWithCheckout response body:",
            e?.response || e?.data || e
          );
        } catch (_) {}
        // Surface friendly message
        showToast(
          e?.message || "Couldn't start checkout. Please try again.",
          "error"
        );
        // If rate limited, advise user
        const msg = (e && (e?.response || e?.data)) || e;
        if (
          String(msg).toLowerCase().includes("too many requests") ||
          (e && e.status === 429)
        ) {
          showToast(
            "Rate limited by Memberstack. Wait a minute and try again.",
            "error"
          );
        }
      }
    }

    // 2) openModal (may rely on Memberstack DOM script to render modal UI)
    if (typeof memberstack.openModal === "function") {
      try {
        console.log("Calling memberstack.openModal('PURCHASE_PLANS')");
        await memberstack.openModal("PURCHASE_PLANS", { priceId });
        showToast("Opening checkout...", "info");
        return;
      } catch (e) {
        console.warn("openModal failed:", e);
      }
    }

    // 3) Try openCheckout if present
    if (typeof memberstack.openCheckout === "function") {
      try {
        console.log("Calling memberstack.openCheckout with priceId");
        await memberstack.openCheckout({ priceIds: [priceId] });
        showToast("Opening checkout...", "info");
        return;
      } catch (e) {
        console.warn("openCheckout failed:", e);
      }
    }

    // 4) Try generic checkout API if present
    if (typeof memberstack.checkout === "function") {
      try {
        console.log("Calling memberstack.checkout with priceId");
        await memberstack.checkout({ priceIds: [priceId] });
        showToast("Opening checkout...", "info");
        return;
      } catch (e) {
        console.warn("checkout API failed:", e);
      }
    }

    // 4) DOM fallback: programmatically click a temporary element with data-ms-action
    const domResult = triggerDomCheckout(priceId);
    if (domResult) {
      showToast("Opening checkout (fallback)...", "info");
      return;
    }

    showToast("Could not start checkout. Check console for details.", "error");
  } catch (err) {
    console.error("Checkout failed (final):", err);
    showToast(err.message || "Checkout failed", "error");
  }
};
</script>

<style scoped>
.pricing-table {
  padding: 80px 0;
}

.pricing-header {
  text-align: center;
  margin-bottom: 64px;
}

.pricing-header h2 {
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.pricing-header p {
  font-size: 20px;
  color: #7f8288;
  max-width: 600px;
  margin: 0 auto;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: #252527;
  border: 2px solid #374151;
  border-radius: 16px;
  padding: 32px;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border-color: #efff94;
}

.pricing-card.featured {
  border-color: #efff94;
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-8px);
}

.recommended-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #efff94;
  color: #000000;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.plan-header {
  text-align: center;
  margin-bottom: 32px;
}

.plan-header h3 {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 8px;
}

.currency {
  font-size: 24px;
  color: #9ca3af;
}

.amount {
  font-size: 56px;
  font-weight: 800;
  color: #ffffff;
}

.period {
  font-size: 18px;
  color: #9ca3af;
}

.savings {
  background: #efff94;
  color: #000000;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
}

.features {
  list-style: none;
  margin-bottom: 32px;
}

.features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  color: #d1d5db;
}

.check-icon {
  width: 20px;
  height: 20px;
  color: #efff94;
  flex-shrink: 0;
}

.plan-button {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
}

.featured-button {
  background: #efff94;
  color: #000000;
}

.featured-button:hover {
  background: #d4e66a;
}

.pricing-footer {
  text-align: center;
  margin-top: 48px;
}

.pricing-footer p {
  color: #9ca3af;
  margin-bottom: 8px;
}

.pricing-footer p:first-child {
  font-weight: 600;
  font-size: 18px;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 20px;
}

.loading-container p {
  color: #9ca3af;
  font-size: 18px;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #374151;
  border-top-color: #efff94;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .pricing-header h2 {
    font-size: 36px;
  }

  .pricing-header p {
    font-size: 18px;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-card.featured:hover {
    transform: translateY(-8px);
  }
}
</style>
