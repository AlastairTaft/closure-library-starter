/**
 * Example goal
 * 
 * Goal: Have Goal Step making x profit in one year
 * 
 * Milestones: 
 * 
 *  - Have 200 monthly paying users
 *  - Have 50 instances of influencer marketing
 *  - Have an established brand presence
 * 
 * Actionables:
 * 
 *  # Find leads
 *  # Email potential customers
 *  # Increase product conversion rate
 * 
 *  # Find and contact an influencer
 *  # Offer affiliate marketing
 *  # Increase product relevance to target influencer market
 * 
 *  # Post article to social media
 *  # Write guest blog post
 *  # Increaes customer support efficiency
 */

const sampleState = {
  "moreusers1": {
    "id": "moreusers1",
    "milestoneKey": "#cf2931",
    "text": "Find leads",
  },
  "moreusers2": {
    "id": "moreusers2",
    "milestoneKey": "#cf2931",
    "text": "Email potential customers",
  },
  "moreusers3": {
    "id": "moreusers3",
    "milestoneKey": "#cf2931",
    "text": "Increase product conversion rate",
  },
  "influencers1": {
    "id": "influencers1",
    "milestoneKey": "#3adad4",
    "text": "Find and contact an influencer",
  },
  "influencers2": {
    "id": "influencers2",
    "milestoneKey": "#3adad4",
    "text": "Offer affiliate marketing",
  },
  "influencers3": {
    "id": "brand1",
    "milestoneKey": "#3adad4",
    "text": "Increase product relevance to target influencer market",
  },
  "brand1": {
    "id": "brand1",
    "milestoneKey": "#e4de3e",
    "text": "Post article to social media",
  },
  "brand2": {
    "id": "brand2",
    "milestoneKey": "#e4de3e",
    "text": "Write guest blog post",
  },
  "brand3": {
    "id": "brand3",
    "milestoneKey": "#e4de3e",
    "text": "Increaes customer support efficiency",
  },
}

export default function(state = sampleState, action){

  return state
}