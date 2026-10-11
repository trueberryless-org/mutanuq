---
title: Investment Appraisal
description: Assessing the profitability of projects with static methods such as cost comparison, return on investment and payback period, and dynamic methods such as net present value.
sidebar:
  order: 6
---

Many projects are investments: money is spent today so that savings or additional revenue arise later. **Investment appraisal** helps to decide whether a project is worthwhile and which of several variants is the most economical.

## Example

A company is considering automating a process with new software:

- purchase and introduction: €30,000
- useful life: 4 years, no residual value
- annual savings in personnel costs minus licence costs (cash inflow): €10,000

The annual depreciation is €30,000 / 4 = €7,500.

## Static methods

Static methods work with average values and do not take into account **when** payments occur. They are simple but imprecise.

### Cost comparison method

The costs of several variants are compared per year, including depreciation and interest on the capital tied up. The cheapest variant is chosen. The method is suitable when all variants provide the same benefit, for example when comparing an in-house server with a cloud offer.

| Annual costs               | in-house server | cloud    |
| -------------------------- | --------------- | -------- |
| Depreciation               | €2,000          | €0       |
| Power and cooling          | €600            | €0       |
| Maintenance and administration | €1,500      | €500     |
| Rent or usage fee          | €0              | €3,800   |
| Total                      | €4,100          | €4,300   |

In this example, the in-house server is slightly cheaper. Factors such as reliability or scalability are not taken into account; they can be assessed with a [weighted scoring model](/en/project_management/basics/creativity_techniques/#evaluating-ideas).

### Profit comparison and return on investment

The average profit per year is the cash inflow minus depreciation: €10,000 − €7,500 = €2,500.

The **return on investment** (ROI) relates this profit to the average capital tied up. With straight-line depreciation, this is half of the purchase cost:

$$
\text{ROI} = \frac{\text{average profit}}{\text{average capital employed}} = \frac{2{,}500}{15{,}000} \approx 16.7\,\%
$$

The investment is worthwhile if the return is higher than the interest rate that could be earned with the money elsewhere.

### Payback period

The **payback period** states after how many years the capital invested has been recovered through the cash inflows:

$$
\text{payback period} = \frac{\text{purchase cost}}{\text{annual cash inflow}} = \frac{30{,}000}{10{,}000} = 3 \text{ years}
$$

The shorter the payback period, the lower the risk. Many companies set a maximum payback period, often two to three years for IT projects, because technology changes quickly.

## Dynamic methods

Dynamic methods take into account that money you have today is worth more than the same amount in a few years, because it could earn interest in the meantime.

### Net present value method

With the **net present value** (NPV) method, all future cash inflows are discounted to today. An amount $R_t$ that occurs in year $t$ is worth only $R_t \cdot (1+i)^{-t}$ today at an interest rate $i$. The net present value $C_0$ is the sum of all discounted cash inflows minus the initial investment $I_0$:

$$
C_0 = -I_0 + \sum_{t=1}^{n} \frac{R_t}{(1+i)^t}
$$

For the example with a discount rate of 5 %:

| Year $t$ | Cash flow  | Discount factor $1.05^{-t}$ | Present value |
| -------- | ---------- | --------------------------- | ------------- |
| 0        | −€30,000   | 1.000000                    | −€30,000.00   |
| 1        | €10,000    | 0.952381                    | €9,523.81     |
| 2        | €10,000    | 0.907029                    | €9,070.29     |
| 3        | €10,000    | 0.863838                    | €8,638.38     |
| 4        | €10,000    | 0.822702                    | €8,227.02     |
| Total    |            |                             | €5,459.50     |

The net present value is positive, so the investment is advantageous: it not only earns the 5 % return, but also an additional present value of about €5,460. With a negative net present value, it would be better to invest the money at the discount rate.

### Internal rate of return

The **internal rate of return** (IRR) is the interest rate at which the net present value is exactly 0. It indicates the actual return on the investment and is usually calculated with a spreadsheet, for example with the `IRR` function in Excel. For the example, it is about 12.6 %.

## Limits of investment appraisal

Many benefits of IT projects are hard to express in money: better security, more satisfied customers, better data quality or compliance with legal requirements. Such qualitative factors are additionally assessed with a weighted scoring model. Moreover, all results depend on estimates that may turn out to be wrong.
