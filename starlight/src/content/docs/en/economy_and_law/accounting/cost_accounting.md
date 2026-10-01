---
title: Cost Accounting
description: Cost terms, cost types, cost centres and the cost allocation sheet, costing methods, contribution margin accounting and break-even analysis.
sidebar:
  order: 4
---

**Cost accounting** is part of management accounting. It answers questions such as: What does it cost to make a product? At what price do we have to sell? Is an additional order worthwhile? From what quantity do we make a profit? Unlike bookkeeping, it is not required by law.

## Cost terms

**Costs** are the consumption of goods and services for the business's operations, valued in money. They partly differ from the expenses in bookkeeping:

- Non-operating expenses are expenses that are not costs, such as a donation or exceptional damage.
- Imputed costs are costs without a corresponding expense, such as an imputed entrepreneur's salary for the work of a sole proprietor or imputed interest on equity.

## Cost type accounting

Cost type accounting asks: **Which** costs have arisen?

### By attributability

- Direct costs can be attributed directly to a product, e.g. materials or production wages for a specific product.
- Overhead costs relate to several products and cannot be attributed directly, e.g. rent, administrative salaries, electricity or insurance.

### By behaviour when output changes

- Fixed costs stay the same when production increases, e.g. rent, depreciation or salaries.
- Variable costs increase with quantity, e.g. materials, packaging or commissions.

$$
K(x) = K_f + k_v \cdot x
$$

Here $K$ is the total cost, $K_f$ the fixed costs, $k_v$ the variable cost per unit and $x$ the quantity. The **unit costs** $\frac{K(x)}{x}$ fall as the quantity rises, because the fixed costs are spread over more units (fixed cost degression).

## Cost centre accounting

Cost centre accounting asks: **Where** have the costs arisen? Cost centres are areas of the business in which costs arise and are managed, such as materials, production, administration and sales.

### Cost allocation sheet

In the **cost allocation sheet**, the overhead costs are distributed to the cost centres using allocation keys, for example rent by square metres or electricity costs by installed power. From this, overhead rates are calculated, which are later used to allocate the overhead costs to the products:

$$
\text{Overhead rate} = \frac{\text{Overhead costs of the cost centre}}{\text{Allocation base (direct costs)}} \cdot 100\,\%
$$

:::tip[Example: Simplified cost allocation sheet]
| Overhead costs      | Total     | Key           | Materials | Production | Administration & sales |
| ------------------- | --------- | ------------- | --------- | ---------- | ---------------------- |
| Rent                | €60,000   | m² (1 : 4 : 1) | 10,000   | 40,000     | 10,000                 |
| Auxiliary wages     | €90,000   | direct        | 20,000    | 60,000     | 10,000                 |
| Depreciation        | €50,000   | asset value   | 5,000     | 40,000     | 5,000                  |
| Other               | €40,000   | direct        | 5,000     | 10,000     | 25,000                 |
| Total           | €240,000  |               | 40,000    | 150,000    | 50,000                 |
| Allocation base |           |               | direct materials €200,000 | production wages €150,000 | production costs €540,000 |
| Overhead rate   |           |               | 20 %  | 100 %  | ≈ 9.3 %            |

The production costs are $200\,000 + 40\,000 + 150\,000 + 150\,000 = 540\,000$ €.
:::

## Cost unit accounting and costing

Cost unit accounting asks: **What** have the costs arisen for? Cost units are the products or services. Costing is used to determine the cost per unit and the selling price.

### Division costing

If a business only makes **one** product (e.g. a power plant produces electricity), the total costs are simply divided by the quantity:

$$
\text{Unit costs} = \frac{\text{Total costs}}{\text{Quantity}}
$$

### Overhead costing

With several products, the direct costs are attributed directly, and the overhead costs are added using the overhead rates from the cost allocation sheet:

:::tip[Example: Costing a housing]
| Item                                                 | Amount      |
| ---------------------------------------------------- | ----------- |
| direct materials                                     | €40.00      |
| + material overheads 20 %                            | €8.00       |
| = Material costs                                 | €48.00  |
| production wages (direct costs)                      | €30.00      |
| + production overheads 100 %                         | €30.00      |
| = Manufacturing costs                            | €60.00  |
| Production costs (materials + manufacturing)     | €108.00 |
| + administration and sales overheads 9.3 %           | €10.04      |
| = Total costs                                    | €118.04 |
| + profit mark-up 15 %                                | €17.71      |
| = Net selling price                              | €135.75 |
| + 20 % VAT                                           | €27.15      |
| = Gross selling price                            | €162.90 |
:::

In retail, a single **mark-up** on the purchase price is often used instead of overhead rates.

## Contribution margin accounting

Full cost accounting allocates all costs to the products. For short-term decisions, however, this is often misleading, because fixed costs arise anyway. **Contribution margin accounting** (marginal costing) therefore only considers the variable costs:

$$
\text{Contribution margin per unit} = \text{Price} - \text{Variable cost per unit}
$$

$$
\text{Operating result} = \text{Total contribution margin} - \text{Fixed costs}
$$

The contribution margin shows how much each unit sold contributes to **covering the fixed costs** and to the profit.

### Decisions based on the contribution margin

- An additional order is worthwhile in the short term if the price is above the variable costs (positive contribution margin), provided there is spare capacity, even if the price is below the full costs.
- In the short term, the lower price limit is the variable cost; in the long term, it is the total cost.
- If there is a bottleneck, the products with the highest contribution margin per bottleneck unit (e.g. per machine hour) should be preferred.

## Break-even analysis

The **break-even point** is the quantity at which revenue exactly covers the costs, so the profit is zero:

$$
p \cdot x = K_f + k_v \cdot x \quad\Rightarrow\quad x_{\text{BEP}} = \frac{K_f}{p - k_v} = \frac{\text{Fixed costs}}{\text{Contribution margin per unit}}
$$

:::tip[Example]
A start-up sells an IoT sensor module for €80. The variable costs are €30 per unit, and the fixed costs are €150,000 per year.

$$
x_{\text{BEP}} = \frac{150\,000}{80 - 30} = 3\,000\ \text{units}
$$

From the 3,001st module sold, the start-up makes a profit. At 5,000 units, the profit is $5\,000 \cdot 50 - 150\,000 = 100\,000$ €.
:::

Graphically, the break-even point is the intersection of the revenue line $E(x) = p \cdot x$ and the cost line $K(x) = K_f + k_v \cdot x$ (see [linear functions](/en/mathematics/functions/linear-functions/)).
